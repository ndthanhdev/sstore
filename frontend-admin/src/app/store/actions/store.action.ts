import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {PaginatedListOfStores, Stores} from "../../models/models";

export const ActionTypes = {

  START_STORE_LOAD: type('[Store] Start Store Load'),
  LOAD_STORE: type('[Store] Load Store'),

  START_ALL_STORE_LOAD: type('[Store] Start All Store Load'),
  LOAD_ALL_STORE: type('[Store] Load All Store'),

};


export class StartStoreLoadAction implements Action {
  type = ActionTypes.START_STORE_LOAD;

  constructor(public payload: { page: number }) {
  }
}

export class LoadStoreAction implements Action {
  type = ActionTypes.LOAD_STORE;

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

export type Actions = StartStoreLoadAction
  | LoadStoreAction
  | StartAllStoreLoadAction
  | LoadAllStoreAction;


