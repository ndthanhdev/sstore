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
  storesLoad$: Observable<Action> = this.actions$
    .ofType(storeActions.ActionTypes.START_STORES_LOAD)
    .switchMap(action => this.storeService.loadPaginatedListOfStores(action.payload.page)
      .concatMap(paginatedListOfStores => of(new storeActions.LoadStoresAction({paginatedListOfStores: paginatedListOfStores}))));


  @Effect()
  allStoreLoad$: Observable<Action> = this.actions$
    .ofType(storeActions.ActionTypes.START_ALL_STORE_LOAD)
    .switchMap(action => this.storeService.loadAllStores()
      .concatMap(stores => of(new storeActions.LoadAllStoreAction({stores: stores}))));

  @Effect()
  storeLoad$: Observable<Action> = this.actions$
    .ofType(storeActions.ActionTypes.START_STORE_LOAD)
    .switchMap(action => this.storeService.loadStore(action.payload.id)
      .concatMap(store => of(new storeActions.LoadStoreAction({store: store}))));

  @Effect()
  storeMonthSaleLoad$: Observable<Action> = this.actions$
    .ofType(storeActions.ActionTypes.START_STORE_MONTH_SALES_LOAD)
    .switchMap(action => this.storeService.getStoreMonthSales(action.payload.id)
      .concatMap(monthSales => of(new storeActions.LoadStoreMonthSalesAction({monthSales: monthSales}))));


}
