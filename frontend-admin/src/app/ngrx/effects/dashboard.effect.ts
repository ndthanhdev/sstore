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
    .ofType(dashboardActions.ActionTypes.START_NOUSERS_LOAD)
    .switchMap(action => this.dashboardService.loadNumberOfUsers()
      .concatMap(noUsers => of(new dashboardActions.LoadNoUsersAction({noUsers: noUsers}))));
}
