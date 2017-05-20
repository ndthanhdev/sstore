import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {CartService} from './cart.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ],
  declarations: [CartDetailComponent, CartProductComponent],
  providers: [CartService]
})
export class CartModule {
}
