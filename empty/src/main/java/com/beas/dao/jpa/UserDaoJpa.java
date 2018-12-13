package com.beas.dao.jpa;

import java.util.List;

import javax.persistence.Query;

import com.beas.dao.UserDao;
import com.beas.domain.Userdata;

public class UserDaoJpa extends BaseDaoJpa<Userdata> implements UserDao{

	public UserDaoJpa() {
		super(Userdata.class, "User");
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<Userdata> findByUsername(String uname) {
		Query query = getEntityManager().createQuery("SELECT ci FROM Userdata AS ci WHERE ci.name  =:uname");
        query.setParameter("uname", uname);
        return query.getResultList();

		
	}

}
