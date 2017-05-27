import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {DetailComponent} from "./detail/detail.component";
import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: ':id', component: DetailComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
