package com.example.angularspringboot.TodoAngular.TodoBean;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepositoryResource extends JpaRepository<Todo, Long>{
	List<Todo> findByUsername(String username);
}
