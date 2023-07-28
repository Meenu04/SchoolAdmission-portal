package com.ex.mod1.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Fees {
	@Id
	private String name;
	private String mail;
	private int rollnum;
	private String std;

}

