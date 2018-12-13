package com.spring.restDemo.persist.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.restDemo.persist.entity.Authority;



public interface AuthorityRepo extends JpaRepository<Authority, Long>{

}
