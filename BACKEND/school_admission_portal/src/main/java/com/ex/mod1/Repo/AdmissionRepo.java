package com.ex.mod1.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.GetMapping;


import com.ex.mod1.entity.Admission;

public interface AdmissionRepo extends JpaRepository<Admission, String> {

	@Query(value="SELECT * from admission",nativeQuery=true)
	public List<Admission> getEvent();
	
}