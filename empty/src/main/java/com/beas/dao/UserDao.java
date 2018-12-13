package com.beas.dao;

import java.util.List;

import com.beas.domain.Userdata;

public interface UserDao extends BaseDao<Userdata>{
	
	public List<Userdata> findByUsername(String uname);

}
