/**
 * Created by vunguyenhung on 5/5/17.
 */
import * as layout from '../actions/layout.action';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {NotificationsService} from 'angular2-notifications';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LayoutEffects {

  @Effect()
  notify$: Observable<Action> = this.actions$
    .ofType(layout.ActionTypes.START_NOTIFY)
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
        return of(new layout.NotifySuccessAction({message: payload.message}));
      }
    );

  constructor(private actions$: Actions, private notificationService: NotificationsService) {
  }

}
