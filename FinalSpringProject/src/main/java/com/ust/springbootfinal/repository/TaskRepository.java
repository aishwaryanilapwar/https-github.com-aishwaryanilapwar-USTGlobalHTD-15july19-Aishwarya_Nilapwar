package com.ust.springbootfinal.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.ust.springbootfinal.dto.Task;

public interface TaskRepository extends JpaRepository<Task, Integer>{
@Transactional
@Modifying
@Query("update Task set ted=:ted where id=:id")
public void update(@Param("ted")Date ted,@Param("id")int id);

}
