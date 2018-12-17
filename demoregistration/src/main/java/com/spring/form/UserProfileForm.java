package com.spring.form;

import java.util.Date;

public class UserProfileForm {
	
	private Long id;
	private String fullname;
	private String email;
	private String mobileno;
	private String gender;
	private Date bday;
	private String profileImage;
	private String day;
	
	private String month;
	
	private String year;
	private Integer is_report_of_passing_initiated;
	
	
	 private Integer is_first_report_of_passing_cycle_open;
	
	
    private Integer is_second_report_of_passing_cycle_open;
	
	
    private Integer percentage_of_confirmation_of_death;
	
	
	
    private Integer total_number_of_receipents;
	
	
    private Integer total_number_of_response_from_receipent;
	
	
	private Date date_of_report_of_passing;
	
	
	
	
    private Long initial_report_of_passing_id;
	
	
    private Integer  is_death_confirm;
	
	
    private Date second_phase_report_of_passing_expirary_date;
	
	
	
    private Integer  is_death_certificate_uploaded;


	 private Long  fnd_request_id;
	
	 private int  fnd_request_status;

	 private boolean  is_frnd_requested_by_me;
	 
	 
	 private String parent_email_id=null;
	 
	public String getParent_email_id() {
		return parent_email_id;
	}



	public void setParent_email_id(String parent_email_id) {
		this.parent_email_id = parent_email_id;
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



	public Date getBday() {
		return bday;
	}



	public void setBday(Date bday) {
		this.bday = bday;
	}



	public String getProfileImage() {
		return profileImage;
	}



	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}



	public String getDay() {
		return day;
	}



	public void setDay(String day) {
		this.day = day;
	}



	public String getMonth() {
		return month;
	}



	public void setMonth(String month) {
		this.month = month;
	}



	public String getYear() {
		return year;
	}



	public void setYear(String year) {
		this.year = year;
	}



	public Integer getIs_report_of_passing_initiated() {
		return is_report_of_passing_initiated;
	}



	public void setIs_report_of_passing_initiated(
			Integer is_report_of_passing_initiated) {
		this.is_report_of_passing_initiated = is_report_of_passing_initiated;
	}



	public Integer getIs_first_report_of_passing_cycle_open() {
		return is_first_report_of_passing_cycle_open;
	}



	public void setIs_first_report_of_passing_cycle_open(
			Integer is_first_report_of_passing_cycle_open) {
		this.is_first_report_of_passing_cycle_open = is_first_report_of_passing_cycle_open;
	}



	public Integer getIs_second_report_of_passing_cycle_open() {
		return is_second_report_of_passing_cycle_open;
	}



	public void setIs_second_report_of_passing_cycle_open(
			Integer is_second_report_of_passing_cycle_open) {
		this.is_second_report_of_passing_cycle_open = is_second_report_of_passing_cycle_open;
	}



	public Integer getPercentage_of_confirmation_of_death() {
		return percentage_of_confirmation_of_death;
	}



	public void setPercentage_of_confirmation_of_death(
			Integer percentage_of_confirmation_of_death) {
		this.percentage_of_confirmation_of_death = percentage_of_confirmation_of_death;
	}



	public Integer getTotal_number_of_receipents() {
		return total_number_of_receipents;
	}



	public void setTotal_number_of_receipents(Integer total_number_of_receipents) {
		this.total_number_of_receipents = total_number_of_receipents;
	}



	public Integer getTotal_number_of_response_from_receipent() {
		return total_number_of_response_from_receipent;
	}



	public void setTotal_number_of_response_from_receipent(
			Integer total_number_of_response_from_receipent) {
		this.total_number_of_response_from_receipent = total_number_of_response_from_receipent;
	}



	public Date getDate_of_report_of_passing() {
		return date_of_report_of_passing;
	}



	public void setDate_of_report_of_passing(Date date_of_report_of_passing) {
		this.date_of_report_of_passing = date_of_report_of_passing;
	}



	public Long getInitial_report_of_passing_id() {
		return initial_report_of_passing_id;
	}



	public void setInitial_report_of_passing_id(Long initial_report_of_passing_id) {
		this.initial_report_of_passing_id = initial_report_of_passing_id;
	}



	public Integer getIs_death_confirm() {
		return is_death_confirm;
	}



	public void setIs_death_confirm(Integer is_death_confirm) {
		this.is_death_confirm = is_death_confirm;
	}



	public Date getSecond_phase_report_of_passing_expirary_date() {
		return second_phase_report_of_passing_expirary_date;
	}



	public void setSecond_phase_report_of_passing_expirary_date(
			Date second_phase_report_of_passing_expirary_date) {
		this.second_phase_report_of_passing_expirary_date = second_phase_report_of_passing_expirary_date;
	}



	public Integer getIs_death_certificate_uploaded() {
		return is_death_certificate_uploaded;
	}



	public void setIs_death_certificate_uploaded(
			Integer is_death_certificate_uploaded) {
		this.is_death_certificate_uploaded = is_death_certificate_uploaded;
	}



	public Long getFnd_request_id() {
		return fnd_request_id;
	}



	public void setFnd_request_id(Long fnd_request_id) {
		this.fnd_request_id = fnd_request_id;
	}



	public int getFnd_request_status() {
		return fnd_request_status;
	}



	public void setFnd_request_status(int fnd_request_status) {
		this.fnd_request_status = fnd_request_status;
	}



	public boolean isIs_frnd_requested_by_me() {
		return is_frnd_requested_by_me;
	}



	public void setIs_frnd_requested_by_me(boolean is_frnd_requested_by_me) {
		this.is_frnd_requested_by_me = is_frnd_requested_by_me;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}
    
    
	
}
