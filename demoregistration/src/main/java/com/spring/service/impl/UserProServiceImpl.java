package com.spring.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

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
import com.spring.model.UserProfile;
import com.spring.model.UserRoleMapping;
import com.spring.security.User;
import com.spring.service.UserProService;
import com.spring.util.CommonUtility;
import com.spring.util.SendMailUtil;


@Service("userService")
@Transactional(propagation=Propagation.REQUIRED)
public class UserProServiceImpl implements UserProService{
	
	UserProDAO userProDAO;

	@Transactional
	public UserForm registration(UserProfile user, HttpServletRequest req)
			throws Exception {
		
		UserForm userForm = new UserForm();
		userForm.setPagename(PagenameConstant.INDEX_PAGE);
		System.out.println("user"+user.getFullname());
		
		if(user != null){
			int count = userProDAO.checkEmailDuplicataion(user.getEmail());
			System.out.println("count"+count);
			if (count > 0) {
				System.out.println(ErrorConstant.USER_ALREADY_PRESENT_ERROR);
				userForm.setError(ErrorConstant.USER_ALREADY_PRESENT_ERROR);

			} else if (!user.getPassword().equals(user.getConfirmPassword())) {
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
						+ "/ET/validEmailIdCheckAfterRegistration?token="
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
				send.mail(user.getEmail(), msgBody, msgSubject, req);
				user.setValidToken(String.valueOf(token));

				// SEND MAIL TO CHECK VALID EMAILID END
				UserRoleMapping userRoleMapping = new UserRoleMapping();
				userRoleMapping.setCreatedOn(new Date());
				userRoleMapping.setUserProfile(user);
				user.setCreatedOn(new Date());
				user.setCreatedBy(user.getId());
				user.setUpdatedBy(user.getId());
				userProDAO.saveUser(user);
				userForm.setError(MessageConstant.USER_ADDED + user.getEmail());
			
		}
		
		
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

	
}


