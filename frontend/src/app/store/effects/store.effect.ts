import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {StoreService} from '../../modules/core/store.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';


import * as storeActions from '../../store/actions/store.action';
import {of} from 'rxjs/observable/of';

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
      .concatMap(primaryStore => of(new storeActions.LoadPrimaryStoreAction({primaryStore: primaryStore}))));

}
