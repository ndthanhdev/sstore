import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'frontend-product-review-input',
  template: `
    <div class="card mb-3">
      <div class="card-block">
        <div class="row align-items-center">
          <div class="col-2 text-center">
            <h1>{{rating}}/5</h1>
            <frontend-product-review-rating
              [rating]="rating">
            </frontend-product-review-rating>
            <div>
              <small>({{totalReviews}} Reviews)</small>
            </div>
          </div>
          <div class="col-10">
            <span class="lead">Rating:</span>
            <div class="mr-2 d-inline-block mb-2 lead">
              <frontend-product-review-rating-input>
              </frontend-product-review-rating-input>
            </div>

            <textarea class="form-control mb-2" id="exampleTextarea" rows="3"
                      placeholder="Write your review"></textarea>
            <button class="btn btn-outline-primary float-right">Post</button>
          </div>

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-review-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductReviewInputComponent implements OnInit, OnChanges {
  @Input() product: Product;

  totalReviews: number;

  rating: number;

  constructor() {
  }

  ngOnChanges(): void {
    if (this.product) {
      this.totalReviews = this.product.reviews.length;

      this.rating = Math.round((this.product.reviews_1_rating_count +
        2 * this.product.reviews_2_rating_count +
        3 * this.product.reviews_3_rating_count +
        4 * this.product.reviews_4_rating_count +
        5 * this.product.reviews_5_rating_count ) / this.totalReviews);
    }

  }

  ngOnInit() {
  }

}
