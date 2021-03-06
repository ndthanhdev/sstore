/**
 * Created by vunguyenhung on 5/5/17.
 */
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Response} from '@angular/http';
import {AuthService} from '../../modules/core/auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import {go} from '@ngrx/router-store';

import * as authActions from '../actions/auth.action';
import * as layoutActions from '../actions/layout.action';
import * as cartActions from '../actions/cart.action';
import {LOCAL_STORAGE_CART} from '../../util/app.constants';

@Injectable()
export class AuthEffects {

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(authActions.ActionTypes.START_LOGIN)
    .map(action => action.payload)
    .switchMap(payload =>
      this.authService.login(payload.username, payload.password)
        .concatMap(user => {
          let cartDetails = [];
          const cartString = localStorage.getItem(LOCAL_STORAGE_CART);
          if (cartString) {
            cartDetails = JSON.parse(cartString).details;
          }
          return Observable.from([
            new authActions.LoginAction({user: user}),
            new cartActions.StartActiveCartLoadAction(),
            new cartActions.StartCartMergeAction({cartDetails: cartDetails}),
            new authActions.LoginSuccessAction({message: 'Login Success!!'}),
            new layoutActions.StartNotifyAction({type: 'SUCCESS', message: 'Login Success!!'}),
            go(['/'])
          ]);
        })
        .catch((error: Response) => {
          return Observable.from([
            new authActions.LoginFailAction({message: error.text()}),
            new layoutActions.StartNotifyAction({type: 'ERROR', message: error.text()})
          ]);
        })
    );

  @Effect()
  register$: Observable<Action> = this.actions$
    .ofType(authActions.ActionTypes.START_REGISTER)
    .map(action => action.payload)
    .switchMap(payload =>
      this.authService.register(payload.user)
        .concatMap(message => {
          return Observable.from([
            new authActions.RegisterAction({message: message}),
            new authActions.RegisterSuccessAction({message: message}),
            new authActions.LoginSuccessAction({message: 'Register Successfully!'}),
            new authActions.StartLoginAction({username: payload.user.username, password: payload.user.password}),
            go(['/'])
          ]);
        })
        .catch((error: Response) => {
          return Observable.from([
            new authActions.RegisterFailAction({error: error}),
            new layoutActions.StartNotifyAction({type: 'ERROR', message: 'Register Failed!'})
          ]);
        })
    );

  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(authActions.ActionTypes.START_LOGOUT)
    .switchMap(payload => {
      localStorage.clear();
      return Observable.from([
        new authActions.LogoutAction(),
        new cartActions.StartLocalActiveCartLoadAction(),
        go(['/'])
      ]);
    });

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
