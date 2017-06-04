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
import {AppConstants, JwtPayLoadKeys} from "../../util/constant";
import {Router} from "@angular/router";
import {go} from "@ngrx/router-store";


@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions,
              private authService: AuthService,
              private  jwtHelper: JwtHelper,
              private route: Router) {
  }

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(authActions.ActionTypes.START_LOGIN)
    .switchMap(action => this.authService.login(action.payload.username, action.payload.password)
      .concatMap(payload => {
        let token = payload.data;
        localStorage.setItem(AppConstants.TokenName, token);

        let jwt = this.jwtHelper.decodeToken(token);
        let accountId: number = jwt[JwtPayLoadKeys.AccountId];
        return Observable.from(
          [
            new authActions.StartLoggedAccountLoadAction({id: accountId}),
            go(['/dashboard'])
          ]);
      }).catch((error: Response) => of(new authActions.StartLogoutAction())));

  @Effect()
  loggedAccountLoad$: Observable<Action> = this.actions$
    .ofType(authActions.ActionTypes.START_LOGGED_ACCOUNT_LOAD)
    .switchMap(action => this.authService.getAccount(action.payload.id)
      .concatMap(account => of(new authActions.LoadLoggedAccountAction({account: account}))));

  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(authActions.ActionTypes.START_LOGOUT)
    .switchMap(action => {
      localStorage.clear();
      return Observable.from(
        [
          go(['/auth/login']),
          new authActions.LogoutAction(),
        ]);
    });
}
