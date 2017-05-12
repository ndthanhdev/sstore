import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductVariationValuesComponent} from './product-variation-values/product-variation-values.component';
import {ProductReviewRatingComponent} from './product-review-rating/product-review-rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductVariationValuesComponent,
    ProductReviewRatingComponent
  ],
  exports: [
    ProductVariationValuesComponent,
    ProductReviewRatingComponent
  ]
})
export class SharedModule {
}
