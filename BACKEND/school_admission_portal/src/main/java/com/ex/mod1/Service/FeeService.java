package com.ex.mod1.Service;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.ex.mod1.Repo.FeeRepo;
import com.ex.mod1.entity.Fees;


@Service
public class FeeService {
	
	@Autowired
	private FeeRepo repo;
	
	
	
	
	
	public boolean addDetails(Fees obj){
		repo.save(obj);
		return true;
	}
	
}