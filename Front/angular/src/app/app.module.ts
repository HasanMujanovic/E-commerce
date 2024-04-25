import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchComponent } from './components/search/search.component';
import { ShopingDetailsComponent } from './components/shoping-details/shoping-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shopping-details', component: ShopingDetailsComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'product-category/:keyword', component: ProductComponent },
  { path: 'product-category/:id/:name', component: ProductComponent },
  { path: 'product-category', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCategoryComponent,
    ProductDetailComponent,
    SearchComponent,
    ShopingDetailsComponent,
    CheckoutComponent,
    CartStatusComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
