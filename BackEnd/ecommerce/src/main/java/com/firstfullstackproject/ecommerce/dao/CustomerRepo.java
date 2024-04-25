package com.firstfullstackproject.ecommerce.dao;

import com.firstfullstackproject.ecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CustomerRepo extends JpaRepository<Customer, Long> {
    Customer findByEmail(String email);
}
