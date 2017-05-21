/**
 * Created by vunguyenhung on 5/5/17.
 */
import * as layoutActions from '../actions/layout.action';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {NotificationsService} from 'angular2-notifications';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {GeolocationService} from '../../modules/core/geolocation.service';

@Injectable()
export class LayoutEffects {

  @Effect()
  notify$: Observable<Action> = this.actions$
    .ofType(layoutActions.ActionTypes.START_NOTIFY)
    .map(action => action.payload)
    .switchMap(payload => {
        switch (payload.type) {
          case 'SUCCESS':
            this.notificationService.success('SUCCESS', payload.message);
            break;
          case 'ERROR':
            this.notificationService.error('ERROR', payload.message);
            break;
        }
      return of(new layoutActions.NotifySuccessAction({message: payload.message}));
      }
    );

  @Effect()
  geolocationLoad$: Observable<Action> = this.actions$
    .ofType(layoutActions.ActionTypes.START_COORDINATES_GET)
    .switchMap(action => this.geolocationService.getLocation()
      .concatMap(coordinates => of(new layoutActions.GetCoordinatesAction({coordinates: coordinates}))))
    .catch(error => of(new layoutActions.GetCoordinatesFailAction({error: error})));

  constructor(private actions$: Actions,
              private notificationService: NotificationsService,
              private geolocationService: GeolocationService) {
  }

}
