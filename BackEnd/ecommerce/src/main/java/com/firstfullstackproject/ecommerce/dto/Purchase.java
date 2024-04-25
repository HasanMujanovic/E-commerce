package com.firstfullstackproject.ecommerce.dto;

import com.firstfullstackproject.ecommerce.entity.Address;
import com.firstfullstackproject.ecommerce.entity.Customer;
import com.firstfullstackproject.ecommerce.entity.Order;
import com.firstfullstackproject.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Order order;
    private Set<OrderItem> orderItem;
    private Address billingAddress;
    private Address shippingAddress;

}
