package com.ust.springbootfinal.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "task_manager")
public class Task {
	@Id
	@Column
	@GeneratedValue
	private int id;
	@Column
	private String taskname;
	@JsonFormat(pattern = "dd-MM-yyyy") 
	@CreationTimestamp
	@GeneratedValue
	@Column
	private Date tsd;
	@JsonFormat(pattern = "dd-MM-yyyy")
	@GeneratedValue
	@Column
	private Date ted;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTaskname() {
		return taskname;
	}

	public void setTaskname(String taskname) {
		this.taskname = taskname;
	}

	public Date getTsd() {
		return tsd;
	}

	public void setTsd(Date tsd) {
		this.tsd = tsd;
	}

	public Date getTed() {
		return ted;
	}

	public void setTed(Date ted) {
		this.ted = ted;
	}

}
