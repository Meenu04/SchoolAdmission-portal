package com.ex.mod1.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ex.mod1.Service.AdmissionSevice;

import com.ex.mod1.entity.Admission;




@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class AdmissionController {
	
	@Autowired
	private AdmissionSevice serv;
	
	@PostMapping("/post")
	public boolean addDetails(@RequestBody Admission obj){
		return serv.addDetails(obj);
	}
	 @GetMapping("/getad")
	 public List<Admission> getAdmission(){
		 return serv.getAdmission();
	 }
	@PutMapping("/putad")
	public void putad(@RequestBody Admission admission) {
	  serv.putad(admission);
	}
	@DeleteMapping("/deletead/{fname}")
	public void deletead(@PathVariable String fname) {
		serv.deletead(fname);
	}
}