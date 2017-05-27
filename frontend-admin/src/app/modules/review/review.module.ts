import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review/review.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ReviewRoutingModule,
    SharedModule
  ],
  declarations: [ReviewComponent]
})
export class ReviewModule { }
