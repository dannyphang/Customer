package com.example.customer.service;

import com.example.customer.entity.Customer;
import com.example.customer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer addCustomer(Customer customer) {
        customer.setDateCreated(new Date());
        customer.setDateModified(new Date());
        return customerRepository.save(customer);
    }

    @Override
    public void deleteCustomerById(int customerId) {
        customerRepository.deleteById(customerId);
    }

    @Override
    public ResponseEntity<Customer> updateCustomer(int customerId, Customer customer) {
        Optional<Customer> customerList = customerRepository.findById(customerId);

        if(customerList.isPresent()){
            Customer customer1 = customerList.get();
            customer1.setFirstName(customer.getFirstName());
            customer1.setLastName(customer.getLastName());
            customer1.setEmail(customer.getEmail());
            customer1.setPassword(customer.getPassword());
            customer1.setPhoneNumber(customer.getPhoneNumber());
            customer1.setCity(customer.getCity());
            customer1.setDateModified(new Date());
            return new ResponseEntity<>(customerRepository.save(customer1), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public List<Customer> displayAllCustomer() {
        return (List<Customer>) customerRepository.findAll();
    }

    @Override
    public String displayCustomerById(int customerId) {
        return customerRepository.findById(customerId).toString();
    }
}
