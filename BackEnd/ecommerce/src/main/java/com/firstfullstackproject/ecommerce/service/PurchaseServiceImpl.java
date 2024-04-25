package com.firstfullstackproject.ecommerce.service;

import com.firstfullstackproject.ecommerce.dao.CustomerRepo;
import com.firstfullstackproject.ecommerce.dto.Purchase;
import com.firstfullstackproject.ecommerce.dto.PurchaseResponse;
import com.firstfullstackproject.ecommerce.entity.Customer;
import com.firstfullstackproject.ecommerce.entity.Order;
import com.firstfullstackproject.ecommerce.entity.OrderItem;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class PurchaseServiceImpl implements PurchaseService{
    private CustomerRepo customerRepo;
    @Autowired
    public PurchaseServiceImpl(CustomerRepo customerRepo){
        this.customerRepo = customerRepo;
    }

    @Override
    @Transactional
    public PurchaseResponse purchaseResponse(Purchase purchase) {
        Order order = purchase.getOrder();

        String orderTrackingNumber = generateOrderTrackingNumber();

        order.setOrderTrackingNumber(orderTrackingNumber);

        Set<OrderItem> orderItems = purchase.getOrderItem();
        orderItems.forEach(order::add);

        order.setShippingAddress(purchase.getShippingAddress());
        order.setBillingAddress(purchase.getBillingAddress());

        Customer customer = purchase.getCustomer();

        String email = customer.getEmail();

        Customer customerDB = customerRepo.findByEmail(email);

        if (customerDB != null){
            customer = customerDB;
        }

        customer.add(order);

        customerRepo.save(customer);

        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber(){
        return UUID.randomUUID().toString();
    }
}
