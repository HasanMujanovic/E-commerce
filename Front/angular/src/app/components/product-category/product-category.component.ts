import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  searchUrl: string = '';
  productCategory: ProductCategory[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductCategories();
  }
  getProductCategories() {
    this.productService.getProductCategories().subscribe((data) => {
      this.productCategory = data;
    });
  }
}
