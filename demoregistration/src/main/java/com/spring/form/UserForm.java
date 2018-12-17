package com.spring.form;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;



public class UserForm extends BaseForm{
	
private Long userId;
	
	
	private String salutation;
	
	private String fullname;
	
	private String email;
	
	private String mobileno;
	
	private String gender;
	
	private String password;
	
	private Date bday;
	
	private Date updatedOn;
	
	private Date createdOn;
	
	private String folderType;
	
	/*private List<UsersFileForm> usersFileForm=new ArrayList<UsersFileForm>();*/

	private String fileDescColor;
	
	private String fileDescStyle;
	
	private String fileDescSize;

    private String parent_email_id=null;

	private Date anniversaryDate;//Tajinder 26-10-2017 

	
	private double memoryAssignedInBytes;


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public String getSalutation() {
		return salutation;
	}


	public void setSalutation(String salutation) {
		this.salutation = salutation;
	}


	public String getFullname() {
		return fullname;
	}


	public void setFullname(String fullname) {
		this.fullname = fullname;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getMobileno() {
		return mobileno;
	}


	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public Date getBday() {
		return bday;
	}


	public void setBday(Date bday) {
		this.bday = bday;
	}


	public Date getUpdatedOn() {
		return updatedOn;
	}


	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}


	public Date getCreatedOn() {
		return createdOn;
	}


	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}


	public String getFolderType() {
		return folderType;
	}


	public void setFolderType(String folderType) {
		this.folderType = folderType;
	}


	public String getFileDescColor() {
		return fileDescColor;
	}


	public void setFileDescColor(String fileDescColor) {
		this.fileDescColor = fileDescColor;
	}


	public String getFileDescStyle() {
		return fileDescStyle;
	}


	public void setFileDescStyle(String fileDescStyle) {
		this.fileDescStyle = fileDescStyle;
	}


	public String getFileDescSize() {
		return fileDescSize;
	}


	public void setFileDescSize(String fileDescSize) {
		this.fileDescSize = fileDescSize;
	}


	public String getParent_email_id() {
		return parent_email_id;
	}


	public void setParent_email_id(String parent_email_id) {
		this.parent_email_id = parent_email_id;
	}


	public Date getAnniversaryDate() {
		return anniversaryDate;
	}


	public void setAnniversaryDate(Date anniversaryDate) {
		this.anniversaryDate = anniversaryDate;
	}


	public double getMemoryAssignedInBytes() {
		return memoryAssignedInBytes;
	}


	public void setMemoryAssignedInBytes(double memoryAssignedInBytes) {
		this.memoryAssignedInBytes = memoryAssignedInBytes;
	}
	
	
	


}
