import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../../store/reducers';
import * as orderActions from '../../../../store/actions/order.action';
@Component({
  selector: 'frontend-new-order',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Creating new order...</h4>
    </div>
    <div class="modal-body">
      <frontend-loading></frontend-loading>
    </div>
  `,
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {
  @Input() cartId: number;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new orderActions.StartOrderCreateAction({cartId: this.cartId}));
  }

}
