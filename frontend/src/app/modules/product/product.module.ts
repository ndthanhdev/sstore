import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {ProductReviewComponent} from './product-review/product-review.component';
import {ProductReviewRatingInputComponent} from './product-review-rating-input/product-review-rating-input.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,

    NgbModule,
    SharedModule
  ],
  declarations: [ProductDetailComponent, ProductReviewComponent, ProductReviewRatingInputComponent]
})
export class ProductModule {
}
