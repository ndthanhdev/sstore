import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductVariationValuesComponent} from './product-variation-values/product-variation-values.component';
import {ProductReviewRatingComponent} from './product-review-rating/product-review-rating.component';
import {LoadingComponent} from './loading/loading.component';
import {VNDPipe} from './vnd.pipe';
import {AmUTCOffsetPipe} from './am-utcoffset.pipe';
import {FileDropDirective} from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductVariationValuesComponent,
    ProductReviewRatingComponent,
    LoadingComponent,
    VNDPipe,
    AmUTCOffsetPipe,
    FileDropDirective
  ],
  exports: [
    ProductVariationValuesComponent,
    ProductReviewRatingComponent,
    LoadingComponent,
    FileDropDirective,

    VNDPipe,
    AmUTCOffsetPipe
  ]
})
export class SharedModule {
}
