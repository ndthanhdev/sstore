import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {DashboardService} from "../../dashboard/dashboard.service";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";

import * as dashboardActions from "../actions/dashboard.action";
import "rxjs/add/operator/switchMap";
import {of} from "rxjs/observable/of";
import "rxjs/add/operator/concatMap";


@Injectable()
export class DashboardEffect {


  constructor(private actions$: Actions,
              private dashboardService: DashboardService) {
  }

  @Effect()
  noUsersLoad$: Observable<Action> = this.actions$
    .ofType(dashboardActions.ActionTypes.START_NO_USERS_LOAD)
    .switchMap(action => this.dashboardService.loadNoUsers()
      .concatMap(noUsers => of(new dashboardActions.LoadNoUsersAction({noUsers: noUsers}))));

  @Effect()
  noRemainingOrdersLoad$: Observable<Action> = this.actions$
    .ofType(dashboardActions.ActionTypes.START_NO_REMAINING_ORDERS_LOAD)
    .switchMap(action => this.dashboardService.loadNoRemainingOrders()
      .concatMap(noReamingOrders => of(new dashboardActions.LoadNoRemainingOrdersAction({noRemainingOrders: noReamingOrders}))));

  @Effect()
  noBadReviewsLoad$: Observable<Action> = this.actions$
    .ofType(dashboardActions.ActionTypes.START_NO_BAD_REVIEWS_LOAD)
    .switchMap(action => this.dashboardService.loadNoBadReviews()
      .concatMap(noBadReviews => of(new dashboardActions.LoadNoBadReviewsAction({noBadReviews: noBadReviews}))));

}
