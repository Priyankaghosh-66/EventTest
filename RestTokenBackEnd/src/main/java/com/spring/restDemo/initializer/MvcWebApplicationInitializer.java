package com.spring.restDemo.initializer;
import com.spring.restDemo.config.JPAConfig;
import com.spring.restDemo.config.MvcConfig;
import com.spring.restDemo.config.SecurityConfig;
import com.spring.restDemo.config.ServiceConfig;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class MvcWebApplicationInitializer extends AbstractAnnotationConfigDispatcherServletInitializer{

	@Override
	protected Class<?>[] getRootConfigClasses() {
		// TODO Auto-generated method stub
		return new Class[]{SecurityConfig.class, ServiceConfig.class, JPAConfig.class};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		
		return new Class[] {MvcConfig.class};
	}

	@Override
	protected String[] getServletMappings() {
		
		return new String[]{"/"};
	}

}
