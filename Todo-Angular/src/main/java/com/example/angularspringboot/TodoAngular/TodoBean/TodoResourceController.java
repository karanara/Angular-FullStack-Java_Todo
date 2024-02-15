package com.example.angularspringboot.TodoAngular.TodoBean;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from Angular's default development server
public class TodoResourceController {

	@Autowired
	private TodoHardedCodedService todoService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getTodos(@PathVariable String username){
		return todoService.findAll();
	}
}
