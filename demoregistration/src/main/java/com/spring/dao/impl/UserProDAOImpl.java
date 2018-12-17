package com.spring.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.security.crypto.bcrypt.BCrypt;

import com.spring.dao.UserProDAO;
import com.spring.model.UserProfile;

public class UserProDAOImpl implements UserProDAO{
	
	SessionFactory sessionFactory;
	
	public UserProDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public int checkEmailDuplicataion(String emailId) throws Exception {
		int count = 0;
		;
		try {

			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(UserProfile.class);
			criteria.add(Restrictions.eq("email", emailId));
			count = criteria.list().size();

		} catch (Exception e) {
			e.printStackTrace();

		}

		return count;
	}

	@Override
	public void saveUser(UserProfile user) throws Exception {
		user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
		sessionFactory.getCurrentSession().saveOrUpdate(user);
		sessionFactory.getCurrentSession().flush();
		
	}
	
	@Override
	public Long getUserIdFromEmailId(String emailId) throws Exception {

		Long userId = 0L;
		try {
			String hql = "SELECT DISTINCT u.id AS userId   FROM "
					+ " UserProfile u " + " WHERE  u.email = :emailId  ";
			Query query = sessionFactory.getCurrentSession().createQuery(hql);
			query.setParameter("emailId", emailId);
			List results = query.list();

			if (results != null)
				userId = (Long) results.get(0);

		} catch (Exception e) {
			System.out
					.println(" ### EXCEPTION IN GETUSERIDFROMEMAILID ###" + e);
		}

		return userId;
	}

	@Override
	public UserProfile getUserDetailsByUserIdAndEmailUId(Long userId,
			String emailId) throws Exception {
		try {
			UserProfile userProfile = new UserProfile();
			Session session = sessionFactory.getCurrentSession();
			String hql = "Select u FROM UserProfile u WHERE u.id = :userId and u.email = :email";

			Query query = session.createQuery(hql);
			query.setParameter("userId", userId);
			query.setParameter("email", emailId);
			userProfile = (UserProfile) query.uniqueResult();

			return userProfile;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}


}
