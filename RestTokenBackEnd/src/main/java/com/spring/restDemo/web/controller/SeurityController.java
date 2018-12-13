package com.spring.restDemo.web.controller;
import io.swagger.annotations.Api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.restDemo.persist.entity.Token;
import com.spring.restDemo.persist.entity.User;
import com.spring.restDemo.persist.repo.TokenRepo;
import com.spring.restDemo.persist.repo.UserRepo;
import com.spring.restDemo.security.SecurityUtils;

import java.util.List;

@RestController
@Api(description = "Users management API")
public class SeurityController {
	
	@Autowired
    private UserRepo userRepo;


    @Autowired
    private TokenRepo tokenRepo;

    @RequestMapping(value = "/security/account", method = RequestMethod.GET)
    public @ResponseBody
    User getUserAccount()  {
        User user = userRepo.findByLogin(SecurityUtils.getCurrentLogin());
        user.setPassword(null);
        return user;
    }


    @PreAuthorize("hasAuthority('admin')")
    @RequestMapping(value = "/security/tokens", method = RequestMethod.GET)
    public @ResponseBody
    List<Token> getTokens () {
        List<Token> tokens = tokenRepo.findAll();
        for(Token t:tokens) {
            t.setSeries(null);
            t.setValue(null);
        }
        return tokens;
    }

}
