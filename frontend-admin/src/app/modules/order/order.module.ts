import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from './order/order.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {SharedModule} from "../shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MomentModule} from "angular2-moment";
import {OrderStateButtonComponent} from './order-state-button/order-state-button.component';
import {OrderService} from "./order.service";

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,

    NgbModule,
    SharedModule,
    MomentModule
  ],
  declarations: [OrderComponent, OrderDetailComponent, OrderStateButtonComponent],
  exports: [OrderComponent, OrderDetailComponent, OrderStateButtonComponent],
  providers: [OrderService]
})
export class OrderModule {
}
