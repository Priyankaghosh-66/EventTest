package com.spring.dao;

import org.springframework.transaction.annotation.Transactional;

import com.spring.model.UserProfile;



public interface UserProDAO {
	
	public int checkEmailDuplicataion(String emailId) throws Exception;
	
	public void saveUser(UserProfile user) throws Exception;
	
	public Long getUserIdFromEmailId(String emailId) throws Exception;
	
	public UserProfile getUserDetailsByUserIdAndEmailUId(Long userId,
			String emailId) throws Exception;

	public int updateValidEmailIdCheckAfterRegistration(String emailId,
			String token) throws Exception ;
	
	
	public UserProfile getUserDetails(String emailId) throws Exception;
	
	public UserProfile getUserByEmailId(String mobileno) throws Exception;

}
