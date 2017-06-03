import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ProductSummary} from '../../../models/product.model';

@Component({
  selector: 'frontend-product-summary',
  template: `
    <div class="card">
      <img class="card-img-top w-100 h-100" [src]="productSummary.img_url" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">{{productSummary.name}}</h4>
        <div class="mb-2">
          <frontend-product-variation-values
            [variationValues]="productSummary.default_variant[0].variation_values">
          </frontend-product-variation-values>
        </div>

        <div class="mb-2"><strong>Price: </strong> {{productSummary.default_variant[0].stores[0].pivot.price | VND}}</div>

        <div class="mb-2" *ngIf="totalReviews > 0">
          <strong>Rating:</strong>
          <frontend-product-review-rating
            [rating]="rating">
          </frontend-product-review-rating>
          <span>({{totalReviews}} Reviews)</span>
        </div>

        <div class="mt-2 float-right">
          <a [routerLink]="['/products', productSummary.id]" class="btn btn-link">Detail</a>
          <button class="btn btn-outline-primary"
                  (click)="onPutToCartButtonClick()">
            <span><i class="fa fa-shopping-cart"></i> Put to Cart</span>
          </button>
        </div>

      </div>
    </div>
  `,
  styleUrls: ['./product-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSummaryComponent implements OnInit, OnChanges {
  @Input() productSummary: ProductSummary;

  @Output() putToCartButtonClicked = new EventEmitter();

  rating;
  totalReviews;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.totalReviews = this.productSummary.reviews_1_rating_count +
      this.productSummary.reviews_2_rating_count +
      this.productSummary.reviews_3_rating_count +
      this.productSummary.reviews_4_rating_count +
      this.productSummary.reviews_5_rating_count;

    this.rating = Math.round((this.productSummary.reviews_1_rating_count +
      2 * this.productSummary.reviews_2_rating_count +
      3 * this.productSummary.reviews_3_rating_count +
      4 * this.productSummary.reviews_4_rating_count +
      5 * this.productSummary.reviews_5_rating_count ) / this.totalReviews);
  }

  onPutToCartButtonClick() {
    this.putToCartButtonClicked.emit({
      quantity: 1,
      price: this.productSummary.default_variant[0].stores[0].pivot.price,
      store_product_variant_id: this.productSummary.default_variant[0].stores[0].pivot.id,
      store_product_variant: {
        price: this.productSummary.default_variant[0].stores[0].pivot.price,
        product_variant: Object.assign({}, this.productSummary.default_variant[0], {
          product: {
            name: this.productSummary.name,
            img_url: this.productSummary.img_url
          }
        })
      }
    });
  }
}
