import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrderComponent} from "./order/order.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";

const routes: Routes = [
  {path: '', component: OrderComponent},
  {path: ':id', component: OrderDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
