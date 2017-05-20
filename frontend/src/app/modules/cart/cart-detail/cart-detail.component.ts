import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Cart} from '../../../models/cart.model';
import {Store} from '@ngrx/store';


import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

import * as fromRoot from '../../../store/reducers';
import * as cartActions from '../../../store/actions/cart.action';
import {CartDetail} from '../../../models/cart-detail.model';

@Component({
  selector: 'frontend-cart-detail',
  template: `
    <div class="jumbotron bg-primary text-white">
      <div class="container">
        <h1 class="display-3">Shopping Cart</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <span class="lead font-weight-bold">Product</span>
        </div>
        <div class="col-2">
          <span class="lead font-weight-bold">Price</span>
        </div>
        <div class="col-2">
          <span class="lead font-weight-bold">Quantity</span>
        </div>
      </div>
      <hr>

      <ng-template [ngIf]="!(loading | async)">
        <!--START CART PRODUCT-->
        <frontend-cart-product
          *ngFor="let detail of cart?.details"
          [quantity]="detail.quantity"
          [productName]="detail.store_product_variant.product.name"
          [productImage]="detail.store_product_variant.product.img_url"
          [price]="detail.store_product_variant.price"
          [variationValues]="detail.store_product_variant.product_variant.variation_values">
        </frontend-cart-product>
        <!--END CART PRODUCT-->
        <!--START CART PRODUCT-->
      </ng-template>

      <frontend-loading *ngIf="(loading | async)"></frontend-loading>

      <div class="row justify-content-end mb-5" *ngIf="!(loading | async)">
        <span class="lead mr-5">Subtotal ({{totalItem()}} items): {{subAmount() | VND}}</span>
      </div>

      <div class="row justify-content-end mr-4 mb-5">
        <button class="btn btn-link btn-lg">Continue shopping</button>
        <button class="btn btn-outline-primary btn-lg">Checkout</button>
      </div>

    </div>
  `,
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  cart: Cart;
  cartSub: Subscription;

  loading: Observable<boolean>;

  cartId: number;

  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute) {
    this.cartSub = this.store.select(fromRoot.getCartCart).subscribe(cart => this.cart = cart);
    this.loading = this.store.select(fromRoot.getCartLoading);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cartId = params['id'];
      this.store.dispatch(new cartActions.StartCartLoadAction({cartId: this.cartId}));
    });
  }

  subAmount(): string {
    if (this.cart) {
      return this.cart.details
        .reduce((pre, curr: CartDetail) => pre + (curr.quantity * +curr.store_product_variant.price), 0)
        .toString();
    }
  }


  totalItem(): number {
    if (this.cart) {
      return this.cart.details.reduce((pre, cur) => pre + cur.quantity, 0);
    }
  }


}
