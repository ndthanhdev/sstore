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
      (onStoreButtonClicked)="onOnStoreButtonClick()"
      (onlineButtonClicked)="onOnlineButtonClick()"
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.DELIVERY_METHOD)">
    </frontend-delivery-method>

    <frontend-delivering-onstore
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.DELIVERING_ONSTORE)">
    </frontend-delivering-onstore>

    <frontend-delivery-online
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.DELIVERING_ONLINE)">
    </frontend-delivery-online>

    <frontend-close-order
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.CLOSE_ORDER)">
    </frontend-close-order>

    <frontend-create-cart
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.CREATE_CART)">
    </frontend-create-cart>

    <frontend-done
      *ngIf="currentCheckoutProgressEqual(checkoutProgressVals.DONE)">
    </frontend-done>
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
    DELIVERING_ONSTORE: CheckoutProgress.DELIVERING_ONSTORE,
    DELIVERING_ONLINE: CheckoutProgress.DELIVERING_ONLINE,
    CREATE_CART: CheckoutProgress.CREATE_CART,
    CLOSE_ORDER: CheckoutProgress.CLOSE_ORDER,
    DONE: CheckoutProgress.DONE,
  };

  constructor(private store: Store<fromRoot.State>) {
    this.checkoutProgressSub = this.store.select(fromRoot.getLayoutCheckoutProgress)
      .subscribe(progress => this.checkoutProgress = progress);
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

  onOnStoreButtonClick() {
    this.store.dispatch(new layoutActions.SetCheckoutProgressAction({checkoutProgress: CheckoutProgress.DELIVERING_ONSTORE}));
  }

  onOnlineButtonClick() {
    this.store.dispatch(new layoutActions.SetCheckoutProgressAction({checkoutProgress: CheckoutProgress.DELIVERING_ONLINE}));
  }
}
