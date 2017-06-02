import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";

import * as storeActions from "../actions/store.action";
import "rxjs/add/operator/switchMap";
import {of} from "rxjs/observable/of";
import "rxjs/add/operator/concatMap";
import {StoreService} from "../../modules/store/store.service";


@Injectable()
export class StoreEffect {


  constructor(private actions$: Actions,
              private storeService: StoreService) {
  }

  @Effect()
 storeLoad$: Observable<Action> = this.actions$
    .ofType(storeActions.ActionTypes.START_STORE_LOAD)
    .switchMap(action => this.storeService.loadPaginatedListOfStores(action.payload.page)
      .concatMap(paginatedListOfStores => of(new storeActions.LoadStoreAction({paginatedListOfStores: paginatedListOfStores}))));


}
