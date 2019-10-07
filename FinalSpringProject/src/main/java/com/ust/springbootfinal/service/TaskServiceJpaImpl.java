package com.ust.springbootfinal.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.springbootfinal.dto.Task;
import com.ust.springbootfinal.repository.TaskRepository;

@Service("jpa")
public class TaskServiceJpaImpl implements TaskService {
	@Autowired
	TaskRepository repository;

	@Override
	public boolean addTask(Task task) {
		Date date=new Date();
		task.setTsd(date);
		repository.save(task);
		return true;
	}

	@Override
	public boolean removeTask(int id) {
		repository.deleteById(id);
		return true;
	}

	@Override
	public boolean modifyTask(Task task) {
		Date endd=new Date();
		repository.update(endd, task.getId());
		return true;
	}

	@Override
	public List<Task> getAllTask() {

		return repository.findAll();
	}

}
