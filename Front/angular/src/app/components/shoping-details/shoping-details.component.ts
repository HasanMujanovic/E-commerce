import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shoping-details',
  templateUrl: './shoping-details.component.html',
  styleUrls: ['./shoping-details.component.css'],
})
export class ShopingDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0.0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartItems();
  }

  updateCartItems() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));
  }
}
