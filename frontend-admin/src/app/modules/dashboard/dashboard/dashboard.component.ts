import {Component, OnInit} from '@angular/core';
import {Constant} from "../constant";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";

import * as rootReducer from "../../../ngrx/reducers/root";
import * as dashboardActions from "../../../ngrx/actions/dashboard.action";

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

  reviewPercents: Observable<any[][]>;
  recentUsers: Observable<any[][]>;

  constructor(private store: Store<rootReducer.State>) {
    this.totalSalesChartOptions = Constant.totalSalesChartOptions;
    this.recentUsersChartOptions = Constant.recentUsersChartOptions;

    this.noUsers = this.store.select(rootReducer.getDashboardNoUsers);
    this.noRemainingOrders = this.store.select(rootReducer.getDashboardNoRemainingOrders);
    this.noBadReviews = this.store.select(rootReducer.getDashboardNoBadReviews);
    this.reviewPercents = this.store.select(rootReducer.getDashboardReviewPercents);
    this.recentUsers = this.store.select(rootReducer.getDashboardRecentUsers);
  }

  ngOnInit() {
    this.store.dispatch(new dashboardActions.StartNoUsersLoadAction());
    this.store.dispatch(new dashboardActions.StartNoRemainingOrdersLoadAction());
    this.store.dispatch(new dashboardActions.StartNoBadReviewsLoadAction());
    this.store.dispatch(new dashboardActions.StartReviewPercentsLoadAction());
    this.store.dispatch(new dashboardActions.StartRecentUsersLoadAction());
  }

}
