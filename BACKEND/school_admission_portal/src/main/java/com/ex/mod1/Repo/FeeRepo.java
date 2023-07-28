package com.ex.mod1.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.mod1.entity.Fees;


public interface FeeRepo extends JpaRepository<Fees, String> {

}
