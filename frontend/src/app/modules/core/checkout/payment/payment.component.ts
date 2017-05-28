import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'frontend-payment',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Payment</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <span class="lead">Waiting for your payment...</span>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-link" (click)="activeModal.close('Close click')">Cancel</button>
      <button class="btn btn-outline-primary">Pay</button>
    </div>
  `,
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    // console.log('on Init payment');
  }

}
