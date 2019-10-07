package com.ust.springbootfinal.controller;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ust.springbootfinal.dto.Task;
import com.ust.springbootfinal.dto.TaskResponse;
import com.ust.springbootfinal.service.TaskService;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "*")
public class TaskController {
	@Autowired
	@Qualifier("jpa")
	private TaskService service;
	
	@InitBinder
	public void initBinder(WebDataBinder binder) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		CustomDateEditor editor = new CustomDateEditor(format, true);
		binder.registerCustomEditor(Date.class, editor);
	}

	@PostMapping(path = "/add", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public TaskResponse addTask(@RequestBody Task task) {
		boolean addtask = service.addTask(task);
		TaskResponse response = new TaskResponse();
		if (addtask) {
			response.setStatuscode(200);
			response.setMessgae("SUCCESS");
			response.setDescription("added");
			response.setTask(Arrays.asList(task));

		} else {
			response.setStatuscode(200);
			response.setMessgae("FAILURE");
			response.setDescription("Cannot be added");

		}
		return response;

	}
	@PutMapping(path = "/modify", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public TaskResponse  modifyTask(@RequestBody Task task) {// @RequestBody conv json data to java
																			// object
		TaskResponse response = new TaskResponse();
		if (service.modifyTask(task)) {
			response.setStatuscode(200);
			response.setMessgae("SUCCESS");
			response.setDescription("modified");
			response.setTask(Arrays.asList(task));

		} else {
			response.setStatuscode(200);
			response.setMessgae("FAILURE");
			response.setDescription("Cannot be modified");

		}
		return response;
	}
	@DeleteMapping(path = "/remove/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public TaskResponse removeTask(@PathVariable("id") int id) {
		TaskResponse response = new TaskResponse();
		if (service.removeTask(id)) {
			response.setStatuscode(200);
			response.setMessgae("SUCCESS");
			response.setDescription("Deleted");

		} else {
			response.setStatuscode(300);
			response.setMessgae("FAILURE");
			response.setDescription("Cannot be Deleted");

		}
		return response;
	}
	@GetMapping(path = "/get-all", produces = MediaType.APPLICATION_JSON_VALUE)
	public TaskResponse getAllTask() {
		List<Task> task = service.getAllTask();
		TaskResponse response = new TaskResponse();
		if (task == null) {
			response.setStatuscode(204);
			response.setMessgae("FAILURE");
			response.setDescription("Record not found");

		} else {
			response.setStatuscode(200);
			response.setMessgae("SUCCESS");
			response.setDescription("Record found");
			response.setTask(task);

		}
		return response;
	}
	
	
}
