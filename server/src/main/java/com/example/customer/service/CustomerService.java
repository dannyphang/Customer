package com.example.customer.service;

import com.example.customer.entity.Customer;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CustomerService {
    // C
    Customer addCustomer(Customer customer);

    // R
    void deleteCustomerById(int customerId);

    // U
    ResponseEntity<Customer> updateCustomer(int customerId, Customer customer);

    // D
    List<Customer> displayAllCustomer();

    String displayCustomerById(int customerId);
}