import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';

import {Subscription} from 'rxjs/Subscription';

import {CartDetail} from '../../../../models/cart-detail.model';
import {MQTTProduct} from '../../../../models/mqtt-product.model';
import 'rxjs/add/operator/delay';


import * as fromRoot from '../../../../store/reducers';
import * as MQTTActions from '../../../../store/actions/mqtt.action';
import * as layoutActions from '../../../../store/actions/layout.action';

@Component({
  selector: 'frontend-delivering-onstore',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Delivering your order...</h4>
    </div>
    <div class="modal-body">
      <frontend-loading></frontend-loading>
    </div>
  `,
  styleUrls: ['./delivering-onstore.component.scss']
})
export class DeliveringOnstoreComponent implements OnDestroy {
  productsSub: Subscription;

  constructor(private store: Store<fromRoot.State>) {
    this.productsSub = this.store.select(fromRoot.getCartCart)
      .map(cart => cart.details)
      .map((details: CartDetail[]) => details.map(detail => new MQTTProduct({
        deviceId: detail.store_product_variant.device.id,
        quantity: detail.quantity
      })))
      .delay(1000)
      .subscribe(products => {
        this.store.dispatch(new MQTTActions.StartProductsGetAction({products: products}));
        this.store.dispatch(new layoutActions.SetCheckoutDoneMsgAction({doneMsg: 'Please take your product at delivery table!'}));
      });
  }

  ngOnDestroy() {
    this.productsSub.unsubscribe();
  }
}
