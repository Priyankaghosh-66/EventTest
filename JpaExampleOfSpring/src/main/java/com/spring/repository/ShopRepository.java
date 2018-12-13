package com.spring.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.model.Shop;

public interface ShopRepository extends JpaRepository<Shop, Integer>{

}
