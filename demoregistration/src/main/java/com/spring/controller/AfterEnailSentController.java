package com.spring.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;



import com.spring.form.UserForm;
import com.spring.service.UserProService;


@Controller
public class AfterEnailSentController {
	
	@Autowired
	private UserProService userService;
	
	private static final Logger logger = Logger
			.getLogger(AfterEnailSentController.class);
	
	/*@RequestMapping(value = "/validEmailIdCheckAfterRegistration", method = RequestMethod.GET)
	public ModelAndView validEmailIdCheckAfterRegistration(
			@RequestParam(value = "emailId") String emailId,
			@RequestParam(value = "token") String token, Model modal) {

		logger.debug("  ################### CLASS WITHOUTLOGINACCESSCONTROLLER ### URL /validEmailIdCheckAfterRegistration ### ENTER ### ");
		ModelAndView model = new ModelAndView();

		try {
			UserForm userForm = userService.validEmailIdCheckAfterRegistration(
					emailId, token);
			model.addObject("message", userForm.getError());
			model.setViewName(userForm.getPagename());

		} catch (Exception e) {

			logger.error("  ################### CLASS WITHOUTLOGINACCESSCONTROLLER ### /validEmailIdCheckAfterRegistration ### ERRROR ### "
					+ e);
			System.out.println("Exception " + e);
		}
		logger.debug("  ################### CLASS WITHOUTLOGINACCESSCONTROLLER ### URL /validEmailIdCheckAfterRegistration ### EXIT ### ");
		return model;
	}*/

}