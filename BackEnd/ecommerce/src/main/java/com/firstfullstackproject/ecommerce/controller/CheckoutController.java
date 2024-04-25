package com.firstfullstackproject.ecommerce.controller;

import com.firstfullstackproject.ecommerce.dto.Purchase;
import com.firstfullstackproject.ecommerce.dto.PurchaseResponse;
import com.firstfullstackproject.ecommerce.service.PurchaseService;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/utun/checkout")
public class CheckoutController {
    private PurchaseService purchaseService;

    public CheckoutController(PurchaseService purchaseService){
        this.purchaseService = purchaseService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase){
        PurchaseResponse purchaseResponse = purchaseService.purchaseResponse(purchase);
        return purchaseResponse;
    }


}
