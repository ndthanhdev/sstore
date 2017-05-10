import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductVariationValuesComponent} from './product-variation-values/product-variation-values.component';
import {ProductReviewsComponent} from './product-reviews/product-reviews.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductVariationValuesComponent, ProductReviewsComponent],
  exports: [ProductVariationValuesComponent, ProductReviewsComponent]
})
export class SharedModule {
}
