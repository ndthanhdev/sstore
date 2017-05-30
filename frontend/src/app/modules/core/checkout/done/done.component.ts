import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {go} from '@ngrx/router-store';

import * as fromRoot from '../../../../store/reducers';
import * as layoutActions from '../../../../store/actions/layout.action';
import {CheckoutProgress} from '../../../../models/checkout-progress.model';

@Component({
  selector: 'frontend-done',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Done!</h4>
    </div>
    <div class="modal-body">
      <span class="lead">{{doneMsg | async}}</span>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-primary" (click)="onOkayButtonClick()">Okay</button>
    </div>
  `,
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  doneMsg: Observable<string>;

  constructor(private store: Store<fromRoot.State>,
              private activeModal: NgbActiveModal) {
    this.doneMsg = this.store.select(fromRoot.getLayoutDoneMsg);
  }

  ngOnInit() {
  }

  onOkayButtonClick() {
    this.store.dispatch(new layoutActions.SetCheckoutProgressAction({checkoutProgress: CheckoutProgress.PAYMENT}));
    this.store.dispatch(go(['/']));
    this.activeModal.close('Close click');
  }

}
