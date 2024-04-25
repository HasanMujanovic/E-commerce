import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../common/purchase';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private purchaseUrl = 'http://localhost:8080/utun/checkout/purchase';

  constructor(private htppClient: HttpClient) {}

  placeOrder(purchase: Purchase): Observable<any> {
    return this.htppClient.post<Purchase>(this.purchaseUrl, purchase);
  }
}
