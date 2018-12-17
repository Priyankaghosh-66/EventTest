package com.spring.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.spring.constant.ErrorConstant;



public class UserDetailsServiceSecurity implements UserDetailsService{
	
	@Autowired
	private com.spring.service.UserProService userService;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public UserDetails loadUserByUsername(String emailId)
			throws UsernameNotFoundException {
		User user = null;
		User activeUser = (User) SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();
		if (activeUser != null) {

			user = userService.getUser(emailId);
			if (user.getIsValidUser() == 1) {
				
			} else {
				throw new UsernameNotFoundException(
						ErrorConstant.YOUR_MAILID_NOT_CHECKED);
			}

		} else {
			throw new UsernameNotFoundException(
					"Please login then try to access ");
		}
		if (user == null) {
			throw new UsernameNotFoundException(
					"User details not found with this email: " + emailId);
		}

		return user;

	}

}
