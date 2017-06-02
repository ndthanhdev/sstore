import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {PaginatedListOfStores} from "../../models/models";

export const ActionTypes = {

  START_STORE_LOAD: type('[Store] Start Store Load'),
  LOAD_STORE: type('[Store] Load Store'),

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

export type Actions = StartStoreLoadAction
  | LoadStoreAction;


