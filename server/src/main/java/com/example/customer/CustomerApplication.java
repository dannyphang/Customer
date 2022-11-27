package com.example.customer;

import com.example.customer.entity.Customer;
import com.example.customer.repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.sql.Date;

@SpringBootApplication
public class CustomerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerApplication.class, args);
	}

	// For initial dummy data
	@Bean
	public CommandLineRunner run (CustomerRepository customerRepository){
		return (args) -> {
			customerRepository.save(new Customer("Phang", "Danny", "phangdanny@gmail.com", "phangdanny", "0123456789", "Ipoh", new Date(2020, 12, 12), new Date(2022, 12, 12)));
			customerRepository.save(new Customer("Liana", "Ling", "lianaling@gmail.com", "lianaling", "0123456789", "Ipoh", new Date(2020, 12, 12), new Date(2022, 12, 12)));
			customerRepository.save(new Customer("Marcus", "Lee", "marcuslee@gmail.com", "marcuslee", "0123456789", "Ipoh", new Date(2020, 12, 12), new Date(2022, 12, 12)));
		};
	}

}
