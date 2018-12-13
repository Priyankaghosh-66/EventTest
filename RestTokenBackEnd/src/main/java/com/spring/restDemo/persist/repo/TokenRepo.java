package com.spring.restDemo.persist.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.restDemo.persist.entity.Token;

public interface TokenRepo extends JpaRepository<Token, String>{

}
