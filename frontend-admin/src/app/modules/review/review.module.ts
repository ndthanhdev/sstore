import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReviewRoutingModule} from './review-routing.module';
import {ReviewComponent} from './review/review.component';
import {SharedModule} from "../shared/shared.module";
import {ReviewService} from "./review.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MomentModule} from "angular2-moment";

@NgModule({
  imports: [
    CommonModule,
    ReviewRoutingModule,
    SharedModule,
    NgbModule,
    MomentModule
  ],
  declarations: [ReviewComponent],
  providers: [ReviewService]
})
export class ReviewModule {
}
