package com.token.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.token.spring.service.DemoService;

@Controller
@RequestMapping("/hello")
public class DemoController {
	
	@Autowired
	private DemoService demoService;
	
	 @RequestMapping(method = RequestMethod.GET)
		public String demo(ModelMap model) throws Exception {
			model.addAttribute("message", demoService.getTrustedMessage());
			return "hello";
		}


		public void setButkeDemoService(DemoService butkeDemoService) {
			this.demoService = butkeDemoService;
		}

}
