import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SharedModule} from "../shared/shared.module";
import {OverviewCardsComponent} from "./overview-cards/overview-cards.component";
import {OverviewCardTotalUserComponent} from './overview-card-total-user/overview-card-total-user.component';
import {OverviewCardNewOrdersComponent} from './overview-card-new-orders/overview-card-new-orders.component';
import {OverviewCardBadReviewsComponent} from './overview-card-bad-reviews/overview-card-bad-reviews.component';
import {DashboardService} from "./dashboard.service";
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    OverviewCardsComponent,
    OverviewCardTotalUserComponent,
    OverviewCardNewOrdersComponent,
    OverviewCardBadReviewsComponent,
  ],
  providers:[
    DashboardService
  ]
})
export class DashboardModule {
}
