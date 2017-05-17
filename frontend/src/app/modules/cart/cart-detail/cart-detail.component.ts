import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-cart-detail',
  template: `
    <div class="jumbotron bg-primary text-white">
      <div class="container">
        <h1 class="display-3">Shopping Cart</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <span class="lead font-weight-bold">Product</span>
        </div>
        <div class="col-2">
          <span class="lead font-weight-bold">Price</span>
        </div>
        <div class="col-2">
          <span class="lead font-weight-bold">Quantity</span>
        </div>
      </div>
      <hr>
      

      <!--START CART PRODUCT-->
      <frontend-cart-product>
      </frontend-cart-product>
      <!--END CART PRODUCT-->
      <!--START CART PRODUCT-->
      <frontend-cart-product>
      </frontend-cart-product>
      <!--END CART PRODUCT-->
      <!--START CART PRODUCT-->
      <frontend-cart-product>
      </frontend-cart-product>
      <!--END CART PRODUCT-->


      <div class="row justify-content-end mb-5">
        <span class="lead mr-5">Subtotal (3 items): 600.000 VND</span>
      </div>

      <div class="row justify-content-end mr-4 mb-5">
        <button class="btn btn-link btn-lg">Continue shopping</button>
        <button class="btn btn-outline-primary btn-lg">Checkout</button>
      </div>

    </div>
  `,
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
