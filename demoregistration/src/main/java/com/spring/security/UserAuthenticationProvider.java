package com.spring.security;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.spring.form.AgeVO;
import com.spring.util.CommonUtility;



@Component
public class UserAuthenticationProvider implements AuthenticationProvider{
	
	@Autowired
	private com.spring.service.UserProService userService;
	
	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public Authentication authenticate(Authentication authentication)
			throws AuthenticationException {

		String name = authentication.getName();
		String password = authentication.getCredentials().toString();

		User user = null;
		if (name != null && name != "" && password != null && password != "") {
			if ((user = userService.getUser(name)) != null) {
				if (passwordEncoder.matches(password, user.getPassword())) {
					List<GrantedAuthority> grantedAuths = user
							.getGrantedAuths();

					if (user.getIsValidUser() != null) {
						System.out.println("user.getIs_valid_user()");
						if (user.getIsValidUser() == 0) {
							System.out.println("InActive");
							throw new AuthenticationCredentialsNotFoundException(
									"InActive");
						} else {
							if (user.getBirthday() != null) {
								Date bDay = user.getBirthday();
								Date userDOB = null;
								try {
									String birthDate = new SimpleDateFormat(
											"dd/MM/yyyy").format(bDay);

									DateFormat formatter = new SimpleDateFormat(
											"dd/MM/yyyy");
									userDOB = (Date) formatter.parse(birthDate);
									System.out.println(userDOB);

								} catch (Exception e) {
									System.out.println("Exception " + e);
								}
								AgeVO age = CommonUtility.calculateAge(userDOB);
								System.out.println(age);
								if (age.getYears() < 13) {
									System.out.println("Minor User");
									throw new LockedException("Minor User");
								} else {
									Authentication auth = new UsernamePasswordAuthenticationToken(
											user, password, grantedAuths);
									return auth;
								}

							}

						}
					} else {
						Authentication auth = new UsernamePasswordAuthenticationToken(
								user, password, grantedAuths);
						return auth;
					}

				} else {
					return null;
				}

			} else {
				return null;
			}

			return null;
		} else {
			return null;
		}

	}

	@Override
	public boolean supports(Class<?> authentication) {
		// TODO Auto-generated method stub
		return false;
	}

}
