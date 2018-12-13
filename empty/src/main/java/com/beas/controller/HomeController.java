package com.beas.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	
	//index page
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String indexPage(ModelMap modelMap) {
        return "index";
    }


}