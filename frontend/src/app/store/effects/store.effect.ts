import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {StoreService} from '../../modules/core/store.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {of} from 'rxjs/observable/of';

import * as storeActions from '../../store/actions/store.action';
import * as layoutActions from '../../store/actions/layout.action';


/**
 * Created by vunguyenhung on 5/18/17.
 */


@Injectable()
export class StoreEffect {


  constructor(private actions$: Actions,
              private storeService: StoreService) {
  }

  @Effect()
  primaryStoreLoad$: Observable<Action> = this.actions$
    .ofType(storeActions.ActionTypes.START_PRIMARY_STORE_LOAD)
    .switchMap(action => this.storeService.loadPrimaryStore()
      .concatMap(store => of(new storeActions.LoadStoreAction({store: store}))));

  @Effect()
  storeLoad$: Observable<Action> = this.actions$
    .ofType(layoutActions.ActionTypes.GET_COORDINATES)
    .switchMap(action => this.storeService.loadStore(action.payload.coordinates)
      .concatMap(store => of(new storeActions.LoadStoreAction({store: store}))));

}
