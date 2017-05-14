import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {ProductReviewComponent} from './product-review/product-review.component';
import {ProductReviewRatingInputComponent} from './product-review-rating-input/product-review-rating-input.component';
import {ProductService} from './product.service';
import {ProductInformationComponent} from './product-information/product-information.component';
import {FormsModule} from '@angular/forms';
import {ProductAttributesComponent} from './product-attributes/product-attributes.component';
import {ProductReviewInputComponent} from './product-review-input/product-review-input.component';
import {MomentModule} from 'angular2-moment';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,

    NgbModule,
    SharedModule,
    MomentModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductReviewComponent,
    ProductReviewRatingInputComponent,
    ProductInformationComponent,
    ProductAttributesComponent,
    ProductReviewInputComponent
  ],
  providers: [ProductService]
})
export class ProductModule {
}
