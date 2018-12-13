package com.token.spring.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_role")
public class UserRole implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7953953889018207349L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long role_id;
	@Column(name = "role")
	private String user_role;
	@JoinColumn(name = "user_name", referencedColumnName = "username")
	@OneToOne(optional = false)
	private User user_name;
	public Long getRole_id() {
		return role_id;
	}
	public void setRole_id(Long role_id) {
		this.role_id = role_id;
	}
	public String getUser_role() {
		return user_role;
	}
	public void setUser_role(String user_role) {
		this.user_role = user_role;
	}
	public User getUser_name() {
		return user_name;
	}
	public void setUser_name(User user_name) {
		this.user_name = user_name;
	}

	

	
	
	

}
