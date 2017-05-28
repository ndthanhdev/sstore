import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-checkout',
  template: `
    <frontend-payment></frontend-payment>
    <!--<frontend-close-cart></frontend-close-cart>-->
    <!--<frontend-new-order></frontend-new-order>-->
    <!--<frontend-delivery-method></frontend-delivery-method>-->
    <!--<frontend-delivering-onstore></frontend-delivering-onstore>-->
    <!--<frontend-create-cart></frontend-create-cart>-->
    <!--<frontend-done-onstore></frontend-done-onstore>-->
    <!--<frontend-delivery-online></frontend-delivery-online>-->
    <!--<frontend-done-online></frontend-done-online>-->
  `,
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
