import { Injectable, OnInit } from '@angular/core';
import { Product } from '../common/product';

import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/utun/products';
  private categoryUrl = 'http://localhost:8080/utun/product-category';

  constructor(private httpClient: HttpClient) {}
  getProductList(categoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;
    return this.getProducts(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }
  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<getResponseProductCategories>(this.categoryUrl)
      .pipe(map((res) => res._embedded.productCategory));
  }

  getProductListSearch(keyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${keyword}`;
    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((res) => res._embedded.products));
  }
  getProduct(productId: number): Observable<Product> {
    // need to build url based on product id
    const productUrl = `${this.baseUrl}/${productId}`;

    return this.httpClient.get<Product>(productUrl);
  }
}
interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
}

interface getResponseProductCategories {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
