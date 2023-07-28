package com.ex.mod1.Service;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.mod1.entity.Sign;

import com.ex.mod1.Repo.SignupRepo;

@Service
public class SignupService {
	
	@Autowired
	private SignupRepo repo;
	
	
	
	
	
	public boolean addDetails(Sign obj){
		repo.save(obj);
		return true;
	}
	
}

