import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  searchMode: boolean = false;
  currentCategoryId: number = 1;
  currentCategoryName: string = '';
  products: Product[] = [];

  // Cart

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }
  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    } else {
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    this.productService
      .getProductList(this.currentCategoryId)
      .subscribe((res) => (this.products = res));
  }

  handleSearchProducts() {
    const keyword = this.route.snapshot.paramMap.get('keyword');

    this.productService
      .getProductListSearch(keyword!)
      .subscribe((data) => (this.products = data));
  }

  addToCart(product: Product) {
    const item = new CartItem(product);
    this.cartService.addToCart(item);
  }
}
