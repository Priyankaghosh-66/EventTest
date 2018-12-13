package com.spring.restDemo.service;

import org.springframework.stereotype.Service;

import com.spring.restDemo.persist.entity.Authority;
import com.spring.restDemo.service.dto.AuthorityDto;

@Service
public class AuthorityServiceImpl extends GenericServiceImpl<Authority, AuthorityDto, Long>{

}
