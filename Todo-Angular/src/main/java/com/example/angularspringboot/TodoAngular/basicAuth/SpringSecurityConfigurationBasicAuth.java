package com.example.angularspringboot.TodoAngular.basicAuth;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.web.SecurityFilterChain;
public class SpringSecurityConfigurationBasicAuth {

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception{
		http.authorizeHttpRequests(auth -> auth.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll());
		http.csrf(csrf->csrf.disable());
		http.httpBasic(Customizer.withDefaults());
		return http.build();
	}
}
