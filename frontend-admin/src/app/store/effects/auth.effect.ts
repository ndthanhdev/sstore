import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {DashboardService} from "../../modules/dashboard/dashboard.service";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";

import * as authActions from "../actions/auth.action";
import "rxjs/add/operator/switchMap";
import {of} from "rxjs/observable/of";
import "rxjs/add/operator/concatMap";
import 'rxjs/add/operator/catch';
import {AuthService} from "../../modules/auth/auth.service";
import {JwtHelper} from "angular2-jwt";
import {JwtPayLoadKeys} from "../../util/constant";


@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions,
              private authService: AuthService,
              private  jwtHelper: JwtHelper) {
  }

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(authActions.ActionTypes.START_LOGIN)
    .switchMap(action => this.authService.login(action.payload.username, action.payload.password)
      .concatMap(jwt => {
        localStorage.setItem('id_token', jwt);
        let accountId: number = this.jwtHelper.decodeToken(jwt)[JwtPayLoadKeys.AccountId];
        return of(new authActions.StartLoggedAccountLoadAction({id: accountId}));
      }).catch((error: Response) => of(new authActions.LoadLoggedAccountAction(null))));

  @Effect()
  loggedAccountLoad$: Observable<Action> = this.actions$
    .ofType(authActions.ActionTypes.START_LOGGED_ACCOUNT_LOAD)
    .switchMap(action => this.authService.getAccount(action.payload.id)
      .concatMap(account => of(new authActions.LoadLoggedAccountAction({account: account}))));
}
