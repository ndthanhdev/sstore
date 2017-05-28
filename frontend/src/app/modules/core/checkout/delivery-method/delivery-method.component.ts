import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-delivery-method',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Choose your delivery method</h4>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-primary"><i class="fa fa-home"></i> On Store</button>
      <button class="btn btn-outline-primary"><i class="fa fa-wifi"></i> Online</button>
    </div>
  `,
  styleUrls: ['./delivery-method.component.scss']
})
export class DeliveryMethodComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
