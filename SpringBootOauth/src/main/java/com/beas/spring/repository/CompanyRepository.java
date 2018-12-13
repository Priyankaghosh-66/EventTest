package com.beas.spring.repository;

import java.util.List;

import com.beas.spring.model.Company;

public interface CompanyRepository {
	
	Company find(Long id);

    Company find(String name);

    List<Company> findAll();

    void create(Company company);

    Company update(Company company);

    void delete(Long id);

    void delete(Company company);

}
