package com.ust.springbootfinal.service;

import java.util.List;
import com.ust.springbootfinal.dto.Task;

public interface TaskService {
	public boolean addTask(Task task);

	public boolean removeTask(int id);

	public boolean modifyTask(Task task);

	public List<Task> getAllTask();
}
