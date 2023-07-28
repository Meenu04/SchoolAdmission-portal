package com.ex.mod1.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.mod1.entity.Sign;


public interface SignupRepo extends JpaRepository<Sign, String> {

}
