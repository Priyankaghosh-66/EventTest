package com.beas.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import com.beas.security.exception.JwtTokenMalformedException;
import com.beas.security.model.AuthenticatedUser;
import com.beas.security.model.JwtAuthenticationToken;
import com.beas.security.transfer.JwtUserDto;
import com.beas.security.util.JwtTokenValidator;

public class JwtAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider{
	
	@Autowired
	JwtTokenValidator jwtTokenValidator;
	
	@Override
    public boolean supports(Class<?> authentication) {
        return (JwtAuthenticationToken.class.isAssignableFrom(authentication));
    }


	@Override
	protected void additionalAuthenticationChecks(UserDetails arg0,
			UsernamePasswordAuthenticationToken arg1)
			throws AuthenticationException {
		
		
	}

	@Override
	protected UserDetails retrieveUser(String arg0,
			UsernamePasswordAuthenticationToken arg1)
			throws AuthenticationException {
		 JwtAuthenticationToken jwtAuthenticationToken = (JwtAuthenticationToken) arg1;
	        String token = jwtAuthenticationToken.getToken();

	        JwtUserDto parsedUser = jwtTokenValidator.parseToken(token);

	        if (parsedUser == null) {
	            throw new JwtTokenMalformedException("JWT token is not valid");
	        }

	        List<GrantedAuthority> authorityList = AuthorityUtils.commaSeparatedStringToAuthorityList(parsedUser.getRole());

	        return new AuthenticatedUser(parsedUser.getId(), parsedUser.getUsername(), token, authorityList);
	    }


}
