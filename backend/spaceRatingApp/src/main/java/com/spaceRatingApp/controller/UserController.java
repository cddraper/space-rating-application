package com.spaceRatingApp.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spaceRatingApp.model.Request.UserSignupRequestModel;
import com.spaceRatingApp.model.response.UserSignupReturnModel;
import com.spaceRatingApp.service.UserService;
import com.spaceRatingApp.shared.UserDto;


@RestController
@CrossOrigin(origins = "http://thirdrate.s3-website.us-east-2.amazonaws.com/")
public class UserController {
	
	@Autowired
	UserService userService;

	@PostMapping(path = "/users")
	public UserSignupReturnModel createUser(@RequestBody UserSignupRequestModel userRequestModel) {
		UserDto userDto = new UserDto();
		BeanUtils.copyProperties(userRequestModel, userDto);
		
		UserDto createdUser = userService.createUser(userDto);
		
		UserSignupReturnModel returnValue = new UserSignupReturnModel();
		
		BeanUtils.copyProperties(createdUser, returnValue);
		
		return returnValue;
	}
	
}