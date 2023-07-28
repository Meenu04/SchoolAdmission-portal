package com.ex.mod1.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ex.mod1.entity.Sign;

import com.ex.mod1.Service.SignupService;

@RestController
public class SignupController {
	
	@Autowired
	private SignupService serv;
	
	@CrossOrigin("http://localhost:3005")
	
	@PostMapping("/add")
	public boolean addDetails(@RequestBody Sign obj){
		return serv.addDetails(obj);
	}	
	
}
