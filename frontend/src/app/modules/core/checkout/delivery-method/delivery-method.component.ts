import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'frontend-delivery-method',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Choose your delivery method</h4>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-primary" (click)="onStoreButtonClicked.emit()">
        <i class="fa fa-home"></i> On Store
      </button>
      <button class="btn btn-outline-primary" (click)="onlineButtonClicked.emit()">
        <i class="fa fa-wifi"></i> Online
      </button>
    </div>
  `,
  styleUrls: ['./delivery-method.component.scss']
})
export class DeliveryMethodComponent implements OnInit {
  @Output() onStoreButtonClicked = new EventEmitter();
  @Output() onlineButtonClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
