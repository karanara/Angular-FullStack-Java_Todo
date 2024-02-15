package com.example.angularspringboot.TodoAngular.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.angularspringboot.TodoAngular.Bean.HelloWorldBean;

@CrossOrigin(origins = "http://localhost:4200") // Allow requests from Angular's default development server
@RestController
public class HelloWorldRestController {

	@GetMapping("/hello-world")
	public String helloWorld() {
		return "hello-world";
	}
	
	@GetMapping("/hello-world-bean")
	public HelloWorldBean helloWorldBean(){
		return new HelloWorldBean("Hello-World-Bean");
	}
	
	@GetMapping("/hello-world-bean/{message}")	
	public HelloWorldBean helloWorldBeanVariable(@PathVariable String message) {
		return new HelloWorldBean("Hello-World "+ message);
	}
}
