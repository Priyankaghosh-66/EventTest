package com.demo.dao.jpa;

import com.demo.dao.UserDao;
import com.demo.domain.User;

public class UserDaoJpa extends BaseDaoJpa<User> implements UserDao{

	public UserDaoJpa() {
		super(User.class, "User");
		// TODO Auto-generated constructor stub
	}

}
