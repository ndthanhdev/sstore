import {Component, OnInit} from '@angular/core';
import {Constant} from "../constant";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";

import * as rootReducer from "../../ngrx/reducers/root";
import * as dashboardActions from "../../ngrx/actions/dashboard.action";

@Component({
  selector: 'frontend-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  noUsers: Observable<number>;
  noRemainingOrders: Observable<number>;
  noBadReviews: Observable<number>;

  totalSalesChartOptions: any;

  recentUsersChartOptions: any;

  reviewPercentsChartOptions: any;

  constructor(private store: Store<rootReducer.State>) {
    this.totalSalesChartOptions = Constant.totalSalesChartOptions;
    this.reviewPercentsChartOptions = Constant.reviewPercentsChartOptions;
    this.recentUsersChartOptions = Constant.recentUsersChartOptions;

    this.noUsers = this.store.select(rootReducer.getDashboardNoUsers);
    this.noRemainingOrders = this.store.select(rootReducer.getDashboardNoRemainingOrders);
    this.noBadReviews = this.store.select(rootReducer.getDashboardNoBadReviews);
  }

  ngOnInit() {
    this.store.dispatch(new dashboardActions.StartNoUsersLoadAction());
    this.store.dispatch(new dashboardActions.StartNoRemainingOrdersLoadAction())
    this.store.dispatch(new dashboardActions.StartNoBadReviewsLoadAction())
  }

}
