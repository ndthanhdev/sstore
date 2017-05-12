import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductVariationValuesComponent} from './product-variation-values/product-variation-values.component';
import {ProductReviewsComponent} from './product-reviews/product-reviews.component';
import {ProductReviewRatingComponent} from './product-review-rating/product-review-rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductVariationValuesComponent, ProductReviewsComponent, ProductReviewRatingComponent],
  exports: [
    ProductVariationValuesComponent,
    ProductReviewsComponent,
    ProductReviewRatingComponent
  ]
})
export class SharedModule {
}
