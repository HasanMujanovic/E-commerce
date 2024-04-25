package com.firstfullstackproject.ecommerce.service;

import com.firstfullstackproject.ecommerce.dto.Purchase;
import com.firstfullstackproject.ecommerce.dto.PurchaseResponse;

public interface PurchaseService {
    PurchaseResponse purchaseResponse(Purchase purchase);
}
