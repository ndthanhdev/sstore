import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {CartService} from './cart.service';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {CheckoutComponent} from '../core/checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,

    CoreModule
  ],
  declarations: [CartDetailComponent, CartProductComponent],
  providers: [CartService],
  entryComponents: [CheckoutComponent]
})
export class CartModule {
}
