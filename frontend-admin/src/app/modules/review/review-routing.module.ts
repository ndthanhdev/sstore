import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReviewComponent} from "./review/review.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path:'',component:ReviewComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
