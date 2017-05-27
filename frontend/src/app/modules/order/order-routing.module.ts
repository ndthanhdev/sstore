import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from './order/order.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrderCreateComponent} from './order-create/order-create.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
  },
  {
    path: 'create',
    component: OrderCreateComponent
  },
  {
    path: ':id',
    component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
