import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {CartService} from './cart.service';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {CheckoutComponent} from '../core/checkout/checkout.component';
import {CartDetailGuestComponent} from './cart-detail-guest/cart-detail-guest.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    FormsModule,

    CoreModule
  ],
  declarations: [CartDetailComponent, CartProductComponent, CartDetailGuestComponent],
  providers: [CartService],
  entryComponents: [CheckoutComponent]
})
export class CartModule {
}
