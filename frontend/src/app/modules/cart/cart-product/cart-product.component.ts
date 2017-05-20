import {Component, Input, OnInit} from '@angular/core';
import {ProductVariationValue} from '../../../models/product-variation-values.model';

@Component({
  selector: 'frontend-cart-product',
  template: `
    <div class="row">
      <div class="col-8">

        <div class="row">
          <!--START PRODUCT IMAGE-->
          <div class="col-lg-4 col-12 text-white d-flex align-items-center justify-content-center">
            <img [src]="productImage" alt="cats" class="img-thumbnail">
          </div>
          <!--END PRODUCT IMAGE-->

          <!--START PRODUCT INFO-->
          <div class="col-lg-8 col-12">
            <div class="mb-1">
              <h4 class="lead d-inline-block"><strong>Name: </strong>{{productName}}</h4>
              <button class="btn btn-outline-danger btn-sm float-right">Delete</button>
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
                <tr *ngFor="let variationValue of variationValues">
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
        <span class="lead">{{price | VND}}</span>
      </div>

      <div class="col-2">
        <div class="form-group mb-0 row">
          <input type="number" class="form-control col-8" [value]="quantity">
        </div>
      </div>
    </div>

    <hr>
  `,
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input() productImage: string;
  @Input() productName: string;
  @Input() price: string;
  @Input() variationValues: ProductVariationValue[];
  @Input() quantity: number;

  constructor() {
  }

  ngOnInit() {
  }

}
