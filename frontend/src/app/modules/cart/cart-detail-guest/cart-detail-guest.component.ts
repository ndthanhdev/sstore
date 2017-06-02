import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-cart-detail-guest',
  template: `
    <div class="jumbotron bg-primary text-white">
      <div class="container">
        <h1 class="display-3">Shopping Cart</h1>
      </div>
    </div>
  `,
  styleUrls: ['./cart-detail-guest.component.scss']
})
export class CartDetailGuestComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
