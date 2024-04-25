import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }
  handleProductDetails() {
    // get id paramter stream and convert it to number
    const productId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(productId).subscribe((data) => {
      this.product = data;
    });
  }
}
