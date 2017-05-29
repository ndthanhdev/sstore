import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../../store/reducers';
import * as cartActions from '../../../../store/actions/cart.action';

@Component({
  selector: 'frontend-close-cart',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Closing your current shopping cart...</h4>
    </div>
    <div class="modal-body">
      <frontend-loading></frontend-loading>
    </div>
  `,
  styleUrls: ['./close-cart.component.scss']
})
export class CloseCartComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new cartActions.StartCartCloseAction());
  }

}
