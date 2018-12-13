package com.demo.business;

import java.util.List;

import com.demo.domain.User;
import com.demo.dto.UserBean;

public interface UserService {
	
	public List<UserBean> loadCustomerList(User user);

}
