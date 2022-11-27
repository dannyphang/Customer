package com.example.customer.controller;

import com.example.customer.entity.Customer;
import com.example.customer.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("")
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

    @DeleteMapping("/{id}")
    public String deleteCustomerById(@PathVariable("id") int customerId) {
        customerService.deleteCustomerById(customerId);
        return "Customer with id \"" + customerId + "\" is deleted successfully";
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable("id") int customerId, @RequestBody Customer customer) {
        return customerService.updateCustomer(customerId, customer);
    }

    @GetMapping("")
    public List<Customer> displayAllCustomer() {
        return customerService.displayAllCustomer();
    }

    @GetMapping("/{id}")
    public String displayCustomerById(@PathVariable("id") int customerId) {
        return customerService.displayCustomerById(customerId).toString();
    }
}
