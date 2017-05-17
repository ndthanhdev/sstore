import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {CartProductComponent} from './cart-product/cart-product.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [CartDetailComponent, CartProductComponent]
})
export class CartModule {
}
