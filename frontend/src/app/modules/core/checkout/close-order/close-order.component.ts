import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../../store/reducers';
import * as orderActions from '../../../../store/actions/order.action';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'frontend-close-order',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Closing your order...</h4>
    </div>
    <div class="modal-body">
      <frontend-loading></frontend-loading>
    </div>
  `,
  styleUrls: ['./close-order.component.scss']
})
export class CloseOrderComponent implements OnInit, OnDestroy {
  orderId: number;

  orderSub: Subscription;

  constructor(private store: Store<fromRoot.State>) {
    this.orderSub = this.store.select(fromRoot.getOrderCreatedOrderId).subscribe(orderId => this.orderId = orderId);
  }

  ngOnInit() {
    this.store.dispatch(new orderActions.StartOrderCloseAction({orderId: this.orderId}));
  }

  ngOnDestroy(): void {
    this.orderSub.unsubscribe();
  }

}
