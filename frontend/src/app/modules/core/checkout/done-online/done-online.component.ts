import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'frontend-done-online',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Done!</h4>
    </div>
    <div class="modal-body">
      <span class="lead">Your order is being delivered!</span>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-primary" (click)="activeModal.close('Close click')">Okay</button>
    </div>
  `,
  styleUrls: ['./done-online.component.scss']
})
export class DoneOnlineComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
