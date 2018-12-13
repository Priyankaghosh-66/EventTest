package com.beas.domain;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class BaseDomain implements Serializable{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Basic(optional = false)
	@Column(name="ID" , nullable=false)
	private Long id;
	
	public BaseDomain(){
		
	}

	public BaseDomain(Long id) {
		
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	 @SuppressWarnings({"JpaModelErrorInspection"})
	    public boolean isNew() {
	        return (id == null);
	    }

	

}
