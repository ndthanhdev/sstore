import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from './order/order.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {OrderService} from './order.service';
import {SharedModule} from '../shared/shared.module';
import {MomentModule} from 'angular2-moment';
import {OrderStateButtonComponent} from './order-state-button/order-state-button.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    SharedModule,


    MomentModule,
    NgbModule
  ],
  declarations: [OrderComponent, OrderDetailComponent, OrderStateButtonComponent],
  providers: [OrderService]
})
export class OrderModule {
}
