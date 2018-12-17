package com.spring.util;

import java.io.File;
import java.io.InputStream;
import java.util.Calendar;
import java.util.Date;
import java.util.Properties;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import com.spring.form.AgeVO;



/*import com.et.form.AgeVO;*/

public class CommonUtility {
	
	private static final Logger logger = Logger.getLogger(CommonUtility.class);
	
	public static Properties loadPropertyFile(String fileName){
		Properties prop = new Properties();
		InputStream inputProperties = null;
		try {
							
							ClassLoader loader = Thread.currentThread().getContextClassLoader();
							inputProperties= loader.getResourceAsStream(fileName);
							prop.load(inputProperties);
						
		}
		catch(Exception e){
			logger.error("  ################### CLASS CommonUtility ### METHOD loadPropertyFile ### ERROR ### "+e);
		}
		return prop;
	}
	
	
	public static String getBaseFilePath(){
		String filePath="";
		try {
							
			filePath=System.getProperty("jboss.home.dir");
			filePath=File.separator+"welcome-content";
		}catch(Exception e){
			logger.error("  ################### CLASS CommonUtility ### METHOD getBaseFilePath ### ERROR ### "+e);
		}
	
		return filePath;
	}	
	
	public static String getBaseFilePathUptoUpload(){
		String filePath="";
		try {
							
			filePath=System.getProperty("jboss.home.dir");
			filePath=File.separator+"welcome-content"+File.separator+"upload";
		}catch(Exception e){
			logger.error("  ################### CLASS CommonUtility ### METHOD getBaseFilePathUptoUpload ### ERROR ### "+e);
		}
	
		return filePath;
	}
	public static String getURL(HttpServletRequest req) {

	    String scheme = req.getScheme();             // http
	    String serverName = req.getServerName();     // hostname.com
	    int serverPort = req.getServerPort();        // 80
	
	    StringBuilder url = new StringBuilder();
	    url.append(scheme).append("://").append(serverName);

	    if (serverPort != 80 && serverPort != 443) {
	        url.append(":").append(serverPort);
	    }

	    
	    return url.toString();
	}
	
	
	public static int getToken(HttpServletRequest req) {

		 Random rand = new Random();
		 int  token= rand.nextInt(1000) + 1;
		 return token;
	}
	
	public static AgeVO calculateAge(Date birthDate)
	   {
	      int years = 0;
	      int months = 0;
	      int days = 0;
	      //create calendar object for birth day
	      Calendar birthDay = Calendar.getInstance();
	      birthDay.setTimeInMillis(birthDate.getTime());
	      //create calendar object for current day
	      long currentTime = System.currentTimeMillis();
	      Calendar now = Calendar.getInstance();
	      now.setTimeInMillis(currentTime);
	      //Get difference between years
	      years = now.get(Calendar.YEAR) - birthDay.get(Calendar.YEAR);
	      int currMonth = now.get(Calendar.MONTH) + 1;
	      int birthMonth = birthDay.get(Calendar.MONTH) + 1;
	      //Get difference between months
	      months = currMonth - birthMonth;
	      //if month difference is in negative then reduce years by one and calculate the number of months.
	      if (months < 0)
	      {
	         years--;
	         months = 12 - birthMonth + currMonth;
	         if (now.get(Calendar.DATE) < birthDay.get(Calendar.DATE))
	            months--;
	      } else if (months == 0 && now.get(Calendar.DATE) < birthDay.get(Calendar.DATE))
	      {
	         years--;
	         months = 11;
	      }
	      //Calculate the days
	      if (now.get(Calendar.DATE) > birthDay.get(Calendar.DATE))
	         days = now.get(Calendar.DATE) - birthDay.get(Calendar.DATE);
	      else if (now.get(Calendar.DATE) < birthDay.get(Calendar.DATE))
	      {
	         int today = now.get(Calendar.DAY_OF_MONTH);
	         now.add(Calendar.MONTH, -1);
	         days = now.getActualMaximum(Calendar.DAY_OF_MONTH) - birthDay.get(Calendar.DAY_OF_MONTH) + today;
	      } else
	      {
	         days = 0;
	         if (months == 12)
	         {
	            years++;
	            months = 0;
	         }
	      }
	      //Create new Age object
	      return new AgeVO(days, months, years);
	   }
	
	public static double convertByteToGbAndMb(double size,String requiredType){
		double result=0;
		if(size!=0 && requiredType!=null){
			
				if(requiredType.equals("b")){//requiredType is byte
					result= size;
					System.out.println("Get Value In Bytes");
					
				}else if(requiredType.equals("k")){ //requiredType is kilobyte
					result = size/1024.0;
					System.out.println("Get Value In Kilo Bytes");
					
				}if(requiredType.equals("m")){ //requiredType is megabyte
					result= ((size/1024.0)/1024.0);
					System.out.println("Get Value In Mega Bytes");
					
				}if(requiredType.equals("g")){ //requiredType is gigabyte
					result= (((size/1024.0)/1024.0)/1024.0);
					System.out.println("Get Value In Giga Bytes");
					
				}if(requiredType.equals("t")){ //requiredType is terabyte
					result = ((((size/1024.0)/1024.0)/1024.0)/1024.0);
					System.out.println("Get Value In Tera Bytes");
				}
		}
		result = Math.round(result * 100);
		result = result/100;
	   return result;
	  
	}
	
}
