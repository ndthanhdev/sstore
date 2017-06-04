import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {PaginatedListOfStores, Stores} from "../../models/models";

export const ActionTypes = {

  START_STORES_LOAD: type('[Store] Start Stores Load'),
  LOAD_STORES: type('[Store] Load Stores'),

  START_ALL_STORE_LOAD: type('[Store] Start All Store Load'),
  LOAD_ALL_STORE: type('[Store] Load All Store'),

  START_STORE_LOAD: type('[Store] Start Store Load'),
  LOAD_STORE: type('[Store] Load Store'),

};


export class StartStoresLoadAction implements Action {
  type = ActionTypes.START_STORES_LOAD;

  constructor(public payload: { page: number }) {
  }
}

export class LoadStoresAction implements Action {
  type = ActionTypes.LOAD_STORES;

  constructor(public payload: { paginatedListOfStores: PaginatedListOfStores }) {
  }
}


export class StartAllStoreLoadAction implements Action {
  type = ActionTypes.START_ALL_STORE_LOAD;

  constructor(public payload: {}) {
  }
}

export class LoadAllStoreAction implements Action {
  type = ActionTypes.LOAD_ALL_STORE;

  constructor(public payload: { stores: Stores[] }) {
  }
}


export class StartStoreLoadAction implements Action {
  type = ActionTypes.START_STORE_LOAD;

  constructor(public payload: { id: number }) {
  }
}

export class LoadStoreAction implements Action {
  type = ActionTypes.LOAD_STORE;

  constructor(public payload: { store: Stores }) {
  }
}

export type Actions = StartStoresLoadAction
  | LoadStoresAction
  | StartAllStoreLoadAction
  | LoadAllStoreAction
  | StartStoreLoadAction
  | LoadStoreAction;


