package com.spring.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumns;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonBackReference;

@Entity
@Table(name = "user_role_mapping")
public class UserRoleMapping extends BaseTrailDomain{
	
	@ManyToOne(fetch=FetchType.LAZY)
	 @JoinColumns({
	        @JoinColumn(updatable=true,insertable=true,name = "user_id", referencedColumnName = "id"),
	        @JoinColumn(updatable=true,insertable=true,name = "email", referencedColumnName = "email")})
		@JsonBackReference
	    private UserProfile userProfile;
	    @OneToOne
	    @JoinColumn(name = "role_id", nullable = false)
	    private RoleMaster roleMaster;
	    
	    public UserRoleMapping(){
			
		}
	    
	    public UserProfile getUserProfile() {
	        return userProfile;
	    }

	    public void setUserProfile(UserProfile userProfile) {
	        this.userProfile = userProfile;
	    }

	    public RoleMaster getRoleMaster() {
	        return roleMaster;
	    }

	    public void setRoleMaster(RoleMaster roleMaster) {
	        this.roleMaster = roleMaster;
	    }
		

}
