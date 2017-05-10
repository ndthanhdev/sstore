import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductSummary} from '../../../models/product.model';

@Component({
  selector: 'frontend-product-summary',
  template: `
    <div class="card">
      <img class="card-img-top w-100 h-100" src="http://lorempixel.com/500/500/cats" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">{{productSummary.name}}</h4>
        <div class="mb-2">
          <frontend-product-variation-values
            [variationValues]="productSummary.defaultVariant.values">
          </frontend-product-variation-values>
        </div>

        <div class="mb-2"><strong>Price: </strong>{{productSummary.defaultVariant.price}}</div>

        <div class="mb-2">
          <frontend-product-reviews
            [rating]="productSummary.rating"
            [reviews]="productSummary.reviews">
          </frontend-product-reviews>
        </div>

        <div class="mt-2 float-right">
          <a [routerLink]="['/products', productSummary.id]" class="btn btn-link">Detail</a>
          <button class="btn btn-outline-primary" (click)="onPutToCartButtonClick()">
            <i class="fa fa-shopping-cart"></i> Put to Cart
          </button>
        </div>

      </div>
    </div>
  `,
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {
  @Input() productSummary: ProductSummary;

  @Output() putToCartButtonClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onPutToCartButtonClick() {
    this.putToCartButtonClicked.emit({id: this.productSummary.id});
  }

}
