import * as storeAction from "../actions/store.action";
import {forEach} from "@angular/router/src/utils/collection";
import {Action} from "@ngrx/store";
import {PaginatedListOfStores, Stores} from "../../models/models";

export interface State {
  isBusy: boolean;
  paginatedListOfStores: PaginatedListOfStores;
  stores: Stores[];
  store: Stores;
  monthSales: any[][];
}

export const initialState: State = {
  isBusy: false,
  paginatedListOfStores: null,
  stores: [],
  store: null,
  monthSales: [
    ['Day', 'Revenue']
  ]
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    // load store
    case storeAction.ActionTypes.START_STORES_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case storeAction.ActionTypes.LOAD_STORES:
      return Object.assign({}, state, {
        isBusy: false,
        paginatedListOfStores: action.payload.paginatedListOfStores
      });

    // load all store
    case storeAction.ActionTypes.START_ALL_STORE_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case storeAction.ActionTypes.LOAD_ALL_STORE:
      return Object.assign({}, state, {
        isBusy: false,
        stores: action.payload.stores
      });

    // load store
    case storeAction.ActionTypes.START_STORE_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case storeAction.ActionTypes.LOAD_STORE:
      return Object.assign({}, state, {
        isBusy: false,
        store: action.payload.store
      });

    // load store month sales
    case storeAction.ActionTypes.START_STORE_MONTH_SALES_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case storeAction.ActionTypes.LOAD_STORE_MONTH_SALES:
      return Object.assign({}, state, {
        isBusy: false,
        monthSales: [...initialState.monthSales, ...action.payload.monthSales]
      });

    default:
      return state;
  }
}

export const getIsBusy = (state: State) => state.isBusy;
export const getPaginatedListOfStores = (state: State) => state.paginatedListOfStores;
export const getStores = (state: State) => state.stores;
export const getStore = (state: State) => state.store;
export const getStoreMonthSales = (state: State) => state.monthSales;
