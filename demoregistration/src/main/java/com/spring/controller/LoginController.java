package com.spring.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.spring.constant.ErrorConstant;
import com.spring.constant.PagenameConstant;
import com.spring.model.UserProfile;
import com.spring.security.User;
import com.spring.service.UserProService;


@Controller
public class LoginController {
	
	private static final Logger logger = Logger
			.getLogger(LoginController.class);

	@Autowired
	private UserProService userService;

	@RequestMapping(value = "/user/", method = RequestMethod.GET)
	public String login(Model model, HttpSession session,
			@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "msg", required = false) String msg,
			HttpServletRequest request, HttpServletResponse response,
			Map<String, Object> modelList) {
		logger.debug("  ################### CLASS LOGINCONTROLLER ### URL /user/ ### ENTER ### ");
		UserProfile childParentLoginLogicForm = new UserProfile();
		boolean isParentChildLogin = false;
		boolean isParentChildLoginAfterRefresh = false;
		if (error != null) {
			System.out.println("error" + error);
			if (error.equals("registration")) {
				model.addAttribute(ErrorConstant.COMMON_ERROR, msg);
			} else {
				model.addAttribute(
						ErrorConstant.COMMON_ERROR,
						getErrorMessage(request,
								"SPRING_SECURITY_LAST_EXCEPTION"));
			}

		} else {
			model.addAttribute("msg", "");
		}

		UserProfile userReg = new UserProfile();
		modelList.put("userReg", userReg);
		modelList.put("loginForm", userReg);

		model.addAttribute("isParentChildLogin", isParentChildLogin);
		modelList.put("loginParentChildForm", childParentLoginLogicForm);
		modelList.put("isParentChildLoginAfterRefresh",
				isParentChildLoginAfterRefresh);

		String pageName = PagenameConstant.INDEX_PAGE;

		if (SecurityContextHolder.getContext().getAuthentication() != null) {
			if (SecurityContextHolder.getContext().getAuthentication()
					.getPrincipal() instanceof User) {
				User activeUser = (User) SecurityContextHolder.getContext()
						.getAuthentication().getPrincipal();
				if (activeUser != null) {
					pageName = "redirect:/user/landing";
				}
			}
		}
		logger.debug("  ################### CLASS LOGINCONTROLLER ### URL /user/ ### EXIT ### ");
		return pageName;
	}

	private String getErrorMessage(HttpServletRequest request, String key) {

		Exception exception = (Exception) request.getSession()
				.getAttribute(key);

		String error = "";
		if (exception instanceof BadCredentialsException) {
			System.out.println("BadCredentialsException");
			error = "Invalid username and password!";
		} else if (exception instanceof LockedException) {
			System.out.println("LockedException");
			error = ErrorConstant.ERROR_MESSAGE_FOR_LOGIN_MINOR_CHILD;
		} else if (exception instanceof AuthenticationCredentialsNotFoundException) {
			System.out.println("AuthenticationCredentialsNotFoundException");
			error = ErrorConstant.YOUR_MAILID_NOT_CHECKED;
		} else if (exception instanceof UsernameNotFoundException) {
			System.out.println("UsernameNotFoundException");
			error = exception.getMessage();
		} else {
			System.out.println("else");
			error = "Invalid username or password!";
		}

		return error;
	}

}
