import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../../store/reducers';
import * as cartActions from '../../../../store/actions/cart.action';

@Component({
  selector: 'frontend-create-cart',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Creating your new Shopping Cart...</h4>
    </div>
    <div class="modal-body">
      <frontend-loading></frontend-loading>
    </div>
  `,
  styleUrls: ['./create-cart.component.scss']
})
export class CreateCartComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new cartActions.StartCartCreateAction());
  }

}
