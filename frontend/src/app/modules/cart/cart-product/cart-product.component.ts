import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartDetail} from '../../../models/cart-detail.model';

@Component({
  selector: 'frontend-cart-product',
  template: `
    <div class="row">
      <div class="col-8">

        <div class="row">
          <!--START PRODUCT IMAGE-->
          <div class="col-lg-4 col-12 text-white d-flex align-items-center justify-content-center">
            <img [src]="detail.store_product_variant.product_variant.product.img_url" alt="cats" class="img-thumbnail">
          </div>
          <!--END PRODUCT IMAGE-->

          <!--START PRODUCT INFO-->
          <div class="col-lg-8 col-12">
            <div class="mb-1">
              <h4 class="lead d-inline-block"><strong>Name: </strong>{{detail.store_product_variant.product_variant.product.name}}</h4>
              <button class="btn btn-outline-danger btn-sm float-right" (click)="onDeleteButtonClick()">Delete</button>
            </div>

            <div class="mb-2">
              <span class="lead"><strong>Variation Values:</strong></span>
              <table class="table table-hover">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let variationValue of detail.store_product_variant.product_variant.variation_values">
                  <td>{{variationValue.name}}</td>
                  <td>{{variationValue.value}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--END PRODUCT INFO-->

        </div>
      </div>
      <div class="col-2">
        <span class="lead">{{detail.store_product_variant.price | VND}}</span>
      </div>

      <div class="col-2">
        <div class="form-group mb-0 row">
          <input type="number" class="form-control col-8" [value]="detail.quantity">
        </div>
      </div>
    </div>
    <hr>
  `,
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input() detail: CartDetail;
  @Output() deleteButtonClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onDeleteButtonClick() {
    this.deleteButtonClicked.emit({cartDetailId: this.detail.id});
  }

}
