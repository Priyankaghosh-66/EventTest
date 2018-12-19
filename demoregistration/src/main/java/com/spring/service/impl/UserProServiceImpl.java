package com.spring.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;






















import com.spring.constant.ErrorConstant;
import com.spring.constant.MessageConstant;
import com.spring.constant.PagenameConstant;
import com.spring.dao.UserProDAO;
import com.spring.form.UserForm;
import com.spring.model.RoleMaster;
import com.spring.model.UserProfile;
import com.spring.model.UserRoleMapping;
import com.spring.security.User;
import com.spring.service.UserProService;
import com.spring.util.CommonUtility;
import com.spring.util.SendMailUtil;


@Service("userService")
@Transactional(propagation=Propagation.REQUIRED)
public class UserProServiceImpl implements UserProService{
	
	@Autowired
	UserProDAO userProDAO;

	@Transactional
	public UserForm registration(UserProfile user, HttpServletRequest req)
			throws Exception {
		
		UserForm userForm = new UserForm();
		userForm.setPagename(PagenameConstant.INDEX_PAGE);
		System.out.println("user"+user.getEmail());
		
		if(user != null){
			System.out.println("inside if of user");
			System.out.println("user"+user.getEmail());
			/*try{*/
				/*System.out.println("count prev");
			int count = userProDAO.checkEmailDuplicataion(user.getEmail());
			System.out.println("count"+count);
			if (count > 0) {
				System.out.println(ErrorConstant.USER_ALREADY_PRESENT_ERROR);
				userForm.setError(ErrorConstant.USER_ALREADY_PRESENT_ERROR);

			} else */
			if (!user.getPassword().equals(user.getConfirmPassword())) {
				System.out.println(user.getPassword().equals(user.getConfirmPassword()));
				userForm.setError(ErrorConstant.PASSWORD_CONFIRMPASSWORD_MISMATCH_ERROR);

			} else {
				System.out.println("mail checking");

				// SEND MAIL TO CHECK VALID EMAILID START

				Random rand = new Random();

				int token = rand.nextInt(1000) + 1;
				SendMailUtil send = new SendMailUtil();
				String ip = CommonUtility.getURL(req);
				String logo = "https://www.everlastingtestament.com/ET/images/email-logo.png";
				String url = "<a href=" + ip
						+ "/demoregistration/validEmailIdCheckAfterRegistration?token="
						+ token + "&emailId=" + user.getEmail()
						+ ">Click here</a>";
				String msgSubject = "Test Mail @ Everlasting Testament User Account activation mail";

				String msgBody = "Dear "
						+ user.getFullname()
						+ " ,<p/>"
						+ " \r\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Please click on the link below to activate your account.&nbsp;"
						+ url + " <p/><p/>  Thanking You <p/>"
						+ "\r\n Everlasting Testament Team<p/>" + "<img src='"
						+ logo + "' style='width: 147px;height: 29px;'>";
				System.out.println(user.getEmail()+"2"+ msgBody+"3"+ msgSubject+"4"+ req);
				send.mail(user.getEmail(), msgBody, msgSubject, req);
				System.out.println(String.valueOf(token));
				user.setValidToken(String.valueOf(token));

				// SEND MAIL TO CHECK VALID EMAILID END

				UserRoleMapping userRoleMapping = new UserRoleMapping();
				userRoleMapping.setCreatedOn(new Date());

				RoleMaster role = new RoleMaster();
				role.setId(1l);
				System.out.println(role.getId());
				/*double memoryInBytes = CommonConstant.MEMORY_ASSIGNEDIN_BYTES_FOR_MEMBER_TYPE_FREE;*/
				List<UserRoleMapping> roleList = new ArrayList<UserRoleMapping>();
				roleList.add(userRoleMapping);

				userRoleMapping.setRoleMaster(role);
				System.out.println("role"+role.getId());
				System.out.println("user Data"+user.getSalutation()+user.getFullname()+user.getEmail()+user.getMobile()+user.getPassword()+user.getBirthday()+user.getGender()+user.getToken()+user.getIsValidUser()+user.getValidToken()+user.getCreatedBy()+user.getCreatedOn()+user.getUpdatedBy()+user.getUpdatedOn());
				
				if(user.getPassword() != null){
					System.out.println("going inside save");
				userProDAO.saveUser(user);
				}else{
					System.out.println("Not going inside save");
				}
				userRoleMapping.setUserProfile(user);
				System.out.println("user id"+user.getId());
				user.setUserRoles(roleList);
				System.out.println("tole list"+roleList);
				user.setCreatedOn(new Date());
				user.setCreatedBy(user.getId());
				user.setUpdatedBy(user.getId());
				userForm.setError(MessageConstant.USER_ADDED + user.getEmail());
		}
			/*}catch(Exception exception)
			{
				System.out.println(exception);
			}
		*/
		
	}else {
		userForm.setError(ErrorConstant.ENTER_ALL_DETAILS_ERROR);
	}
	return userForm;
	}

	@Override
	public User getUser(String emailId) {
		
		try {
			Long userId = userProDAO.getUserIdFromEmailId(emailId);

			if (userId != null && userId != 0L) {

				UserProfile userProfile = userProDAO
						.getUserDetailsByUserIdAndEmailUId(userId, emailId);
				if (null != userProfile) {
					List<GrantedAuthority> grantedAuths = new ArrayList<GrantedAuthority>();
					for (UserRoleMapping userRole : userProfile.getUserRoles()) {
						grantedAuths.add(new SimpleGrantedAuthority(userRole
								.getRoleMaster().getRoleName()));
					}
					User user = new User(userProfile.getEmail(),
							userProfile.getPassword(), 
							grantedAuths, userProfile.getMobile(),
							userProfile.getFullname(),
							userProfile.getSalutation(),
							userProfile.getGender(),
							userProfile.getBirthday(),
							userProfile.getToken(),
							userProfile.getIsValidUser(), grantedAuths);
					user.setEmail(userProfile.getEmail());
					user.setFullname(userProfile.getFullname());
					user.setMobileno(userProfile.getMobile());
					user.setPassword(userProfile.getPassword());
					;
					user.setId(userProfile.getId());
					
					user.setSalutation(userProfile.getSalutation());
					return user;
				} else {
					return null;
				}
			} else {
				return null;
			}
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public UserForm validEmailIdCheckAfterRegistration(String emailId,
			String token) throws Exception {
		UserForm userForm = new UserForm();
		userForm.setPagename(PagenameConstant.SUCCESS_PAGE);
		userForm.setError(ErrorConstant.INVALID_EMAILID_CHECK_AFTER_REGISTRATION_SUCCESS);
		UserProfile userProfile = userProDAO.getUserByEmailId(emailId);

		try {
			if (userProfile != null) {
				if (userProfile.getValidToken() != null) {
					if (userProfile.getValidToken().equals(token)) {
						int result = userProDAO
								.updateValidEmailIdCheckAfterRegistration(
										emailId, token);
						if (result == 1) {
							userForm.setError(ErrorConstant.VALID_EMAILID_CHECK_AFTER_REGISTRATION_SUCCESS);
						}
					}
				}
			}
		} catch (Exception e) {
			System.out.println("Exception " + e);
		}
		return userForm;
	}

	
}


