import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromRoot from '../../../../store/reducers';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {go} from '@ngrx/router-store';

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
      <button type="button" class="btn btn-outline-primary" (click)="activeModal.close('Close click')">Okay</button>
    </div>
  `,
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  doneMsg: Observable<string>;

  constructor(private store: Store<fromRoot.State>,
              private activeModal: NgbActiveModal) {
    this.doneMsg = this.store.select(fromRoot.getLayoutDoneMsg);
    this.store.dispatch(go(['/']));
  }

  ngOnInit() {
  }

}
