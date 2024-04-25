import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../common/order';
import { OrderHistory } from '../common/order-history';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService {
  private orderUrl = 'http://localhost:8080/utun/orders';

  constructor(private httpClient: HttpClient) {}

  getOrderHistory(email: string): Observable<GetResponseOrderHistory> {
    // need to build url based on customer email
    const orderHsitoryUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${email}`;

    return this.httpClient.get<GetResponseOrderHistory>(orderHsitoryUrl);
  }
}
interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  };
}
