import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';


import {CheckoutProgress} from '../../../models/checkout-progress.model';
import {Subscription} from 'rxjs/Subscription';

import * as fromRoot from '../../../store/reducers';
import * as layoutActions from '../../../store/actions/layout.action';
import {ActiveCart} from '../../../models/cart.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'frontend-checkout',
  template: `
    <frontend-payment
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.PAYMENT)"
      (payButtonClicked)="onPayButtonClick()">
    </frontend-payment>

    <frontend-close-cart
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.CLOSE_CART)">
    </frontend-close-cart>

    <frontend-new-order
      [cartId]="(activeCart | async).id"
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.NEW_ORDER)">
    </frontend-new-order>

    <frontend-delivery-method
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.DELIVERY_METHOD)">
    </frontend-delivery-method>

    <frontend-delivering-onstore
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.DONE_ONSTORE)">
    </frontend-delivering-onstore>

    <frontend-create-cart
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.CREATE_CART)">
    </frontend-create-cart>

    <frontend-done-onstore
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.DONE_ONSTORE)">
    </frontend-done-onstore>

    <frontend-delivery-online
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.DONE_ONLINE)">
    </frontend-delivery-online>

    <frontend-done-online
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.DONE_ONLINE)">
    </frontend-done-online>
  `,
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  checkoutProgress: CheckoutProgress;
  checkoutProgressSub: Subscription;
  activeCart: Observable<ActiveCart>;

  checkoutProgressVals = {
    NONE: CheckoutProgress.NONE,
    PAYMENT: CheckoutProgress.PAYMENT,
    CLOSE_CART: CheckoutProgress.CLOSE_CART,
    NEW_ORDER: CheckoutProgress.NEW_ORDER,
    DELIVERY_METHOD: CheckoutProgress.DELIVERY_METHOD,
    DELIVERY_ONSTORE: CheckoutProgress.DELIVERY_ONSTORE,
    DELIVERY_ONLINE: CheckoutProgress.DONE_ONLINE,
    CREATE_CART: CheckoutProgress.CREATE_CART,
    DONE_ONSTORE: CheckoutProgress.DONE_ONSTORE,
    DONE_ONLINE: CheckoutProgress.DONE_ONLINE
  };

  constructor(private store: Store<fromRoot.State>) {
    this.checkoutProgressSub = this.store.select(fromRoot.getLayoutCheckoutProgess).subscribe(progress => this.checkoutProgress = progress);
    this.activeCart = this.store.select(fromRoot.getCartActiveCart);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.checkoutProgressSub.unsubscribe();
  }


  currentCheckoutProgressEqual(progress: CheckoutProgress) {
    return this.checkoutProgress === progress;
  }

  onPayButtonClick() {
    this.store.dispatch(new layoutActions.SetCheckoutProgressAction({checkoutProgress: CheckoutProgress.CLOSE_CART}));
  }
}
