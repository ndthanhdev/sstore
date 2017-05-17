/**
 * Created by vunguyenhung on 5/5/17.
 */
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as auth from '../actions/auth.action';
import * as layout from '../actions/layout.action';
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


@Injectable()
export class AuthEffects {

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.START_LOGIN)
    .map(action => action.payload)
    .switchMap(payload =>
      this.authService.login(payload.username, payload.password)
        .concatMap(user => {
          return Observable.from([
            new auth.LoginAction({user: user}),
            new auth.LoginSuccessAction({message: 'Login Success!!'}),
            new layout.StartNotifyAction({type: 'SUCCESS', message: 'Login Success!!'})
          ]);
        })
        .catch((error: Response) => {
          return Observable.from([
            new auth.LoginFailAction({message: error.text()}),
            new layout.StartNotifyAction({type: 'ERROR', message: error.text()})
          ]);
        })
    );

  @Effect()
  register$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.START_REGISTER)
    .map(action => action.payload)
    .switchMap(payload =>
      this.authService.register(payload.user)
        .concatMap(message => {
          return Observable.from([
            new auth.RegisterAction({message: message}),
            new auth.RegisterSuccessAction({message: message}),
            new auth.StartLoginAction({username: payload.user.username, password: payload.user.password}),
            go(['/'])
          ]);
        })
        .catch((error: Response) => {
          return Observable.from([
            new auth.RegisterFailAction({error: error}),
            new layout.StartNotifyAction({type: 'ERROR', message: 'Register Failed!'})
          ]);
        })
    );

  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.START_LOGOUT)
    .switchMap(payload => {
      localStorage.clear();
      return Observable.of(new auth.LogoutAction());
    });

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
