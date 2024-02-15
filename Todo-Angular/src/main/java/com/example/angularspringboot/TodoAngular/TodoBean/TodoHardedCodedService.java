package com.example.angularspringboot.TodoAngular.TodoBean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardedCodedService {

	private static List<Todo> todos=new ArrayList<>();
	private static long idCounter = 0;
	static {
		todos.add(new Todo(++idCounter, "ramya","Learn to Angular 2", new Date(), false ));
		todos.add(new Todo(++idCounter, "ramya","Learn about Microservices 2", new Date(), false ));
		todos.add(new Todo(++idCounter, "ramya","Learn about Angular", new Date(), false ));
	}
	public List<Todo> findAll() {
		return todos;
	}
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo==null)return null;
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}
	public Todo findById(long id) {
		for(Todo todo:todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}

}