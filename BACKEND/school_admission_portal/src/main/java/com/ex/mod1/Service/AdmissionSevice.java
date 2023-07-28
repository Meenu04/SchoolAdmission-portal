package com.ex.mod1.Service;

import java.util.List;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.ex.mod1.Repo.AdmissionRepo;

import com.ex.mod1.entity.Admission;



@Service
public class AdmissionSevice {
	
	@Autowired
	private AdmissionRepo repo;
	
	
	
	public List<Admission> getAdmission() {
        return repo.findAll();
    }
	
	public boolean addDetails(Admission obj){
		repo.save(obj);
		return true;
	}
	public void putad(Admission admission) {
		repo.saveAndFlush(admission);
	}
	public void deletead(String fname) {
		repo.deleteById(fname);;
	}
}