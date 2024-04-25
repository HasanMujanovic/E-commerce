import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  quantity: number = 0;
  price: number = 0.0;

  constructor() {}

  addToCart(product: CartItem) {
    let existingItem: CartItem = undefined!;
    let alredyExist: boolean = false;

    if (this.cartItems.length > 0) {
      existingItem = this.cartItems.find(
        (tempItem) => tempItem.id === product.id
      )!;
      alredyExist = existingItem != undefined;
    }
    if (!alredyExist) {
      this.cartItems.push(product);
      this.quantity += 1;
      this.price += product.unitPrice;
    } else {
      existingItem.quantity++;
      this.quantity += 1;
      this.price += product.unitPrice;
    }

    this.totalPrice.next(parseFloat(this.price.toFixed(2)));
    this.totalQuantity.next(this.quantity);
  }
}
