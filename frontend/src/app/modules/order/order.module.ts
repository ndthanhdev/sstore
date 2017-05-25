import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from './order/order.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {OrderCreateComponent} from './order-create/order-create.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,

    NgbModule
  ],
  declarations: [OrderComponent, OrderDetailComponent, OrderCreateComponent]
})
export class OrderModule {
}
