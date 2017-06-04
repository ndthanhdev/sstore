import {Component, OnInit} from '@angular/core';
import {Cart} from '../../../models/cart.model';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';


import * as fromRoot from '../../../store/reducers';
import * as cartActions from '../../../store/actions/cart.action';
import {back} from '@ngrx/router-store';
import {CartDetail} from '../../../models/cart-detail.model';

@Component({
  selector: 'frontend-cart-detail-guest',
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
        <frontend-cart-product
          *ngFor="let detail of localCart?.details;trackBy: trackByFn"
          [detail]="detail"
          [modifying]="modifying | async"
          (deleteButtonClicked)="onDeleteButtonClick($event)"
          (cartDetailQuantityEdited)="onCartDetailQuantityEdit($event)">
        </frontend-cart-product>
      </ng-template>

      <frontend-loading *ngIf="(loading | async)"></frontend-loading>

      <div class="row justify-content-end mb-5" *ngIf="!(loading | async)">
        <span class="lead mr-5">Subtotal ({{totalItem()}} items): {{subAmount() | VND}}</span>
      </div>

      <div class="row justify-content-end mr-4 mb-5">
        <button class="btn btn-link btn-lg" (click)="goBack()">Continue shopping</button>
        <button class="btn btn-outline-primary btn-lg" disabled>Please login to check out
        </button>
      </div>

    </div>
  `,
  styleUrls: ['./cart-detail-guest.component.scss']
})
export class CartDetailGuestComponent implements OnInit {
  localCart: Cart;
  localCartSub: Subscription;

  loading: Observable<boolean>;
  modifying: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.localCartSub = this.store.select(fromRoot.getCartLocalCart).subscribe(localCart => this.localCart = localCart);
    this.loading = this.store.select(fromRoot.getCartLoading);
  }

  ngOnInit() {
    this.store.dispatch(new cartActions.StartLocalCartLoadAction());
  }

  onDeleteButtonClick($event) {
    this.store.dispatch(new cartActions.StartLocalProductDeleteAction({
      cartDetailId: $event.cartDetailId,
      quantity: $event.quantity
    }));
  }

  onCartDetailQuantityEdit($event) {
    this.store.dispatch(new cartActions.StartLocalCartDetailQuantityEditAction({
      cartDetailId: $event.cartDetailId,
      quantity: $event.quantity,
      quantityOffset: $event.quantityOffset
    }));
  }

  goBack() {
    this.store.dispatch(back());
  }

  totalItem(): number {
    if (this.localCart && this.localCart.details) {
      return this.localCart.details.reduce((pre, cur) => pre + cur.quantity, 0);
    } else {
      return 0;
    }
  }

  subAmount(): string {
    if (this.localCart && this.localCart.details) {
      return this.localCart.details
        .reduce((pre, curr: CartDetail) => pre + (curr.quantity * +curr.store_product_variant.price), 0)
        .toString();
    } else {
      return '0';
    }
  }

  trackByFn(index, item) {
    return item.id;
  }
}
