package com.token.spring.web;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

public class OAuth2PreAuthenticationProvider implements AuthenticationProvider{

	@Override
	public Authentication authenticate(Authentication arg0)
			throws AuthenticationException {
		if (!supports(arg0.getClass()))
		{
			return null;
		}

		return arg0;
	}

	@Override
	public boolean supports(Class<?> arg0) {
		return OAuth2PreAuthenticationToken.class.isAssignableFrom(arg0);
	}

}
