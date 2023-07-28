package com.ex.mod1.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ex.mod1.Service.FeeService;
import com.ex.mod1.entity.Fees;



@RestController
public class FeeContoller {
	
	@Autowired
	private FeeService serv;
	@CrossOrigin("http://localhost:3000")
	
	@PostMapping("/ad")
	public boolean addDetails(@RequestBody Fees obj){
		return serv.addDetails(obj);
	}	
	
}
