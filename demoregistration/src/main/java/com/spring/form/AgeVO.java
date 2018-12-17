package com.spring.form;

public class AgeVO {
	
	private int days;
	   private int months;
	   private int years;
	 
	   private AgeVO()
	   {
	      //Prevent default constructor
	   }
	 
	   public AgeVO(int days, int months, int years)
	   {
	      this.days = days;
	      this.months = months;
	      this.years = years;
	   }
	 
	   public int getDays()
	   {
	      return this.days;
	   }
	 
	   public int getMonths()
	   {
	      return this.months;
	   }
	 
	   public int getYears()
	   {
	      return this.years;
	   }
	 
	   @Override
	   public String toString()
	   {
	      return years + " Years, " + months + " Months, " + days + " Days";
	   }

}
