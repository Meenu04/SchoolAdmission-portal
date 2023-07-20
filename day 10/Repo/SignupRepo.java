package com.ex.mod1.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.mod1.entity.Signup;

public interface SignupRepo extends JpaRepository<Signup, String> {

}
