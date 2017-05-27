import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Store} from '../../models/store.model';
/**
 * Created by vunguyenhung on 5/18/17.
 */

export const ActionTypes = {
  START_PRIMARY_STORE_LOAD: type('[Store] Start Primary Store Load'),
  LOAD_PRIMARY_STORE: type('[Store] Load Primary Store'),
  LOAD_STORE: type('[Store] Load Store'),
};

export class StartPrimaryStoreLoadAction implements Action {
  type = ActionTypes.START_PRIMARY_STORE_LOAD;

  constructor(public payload?) {
  }
}

export class LoadPrimaryStoreAction implements Action {
  type = ActionTypes.LOAD_PRIMARY_STORE;

  constructor(public payload: { primaryStore: Store }) {
  }
}

export class LoadStoreAction implements Action {
  type = ActionTypes.LOAD_STORE;

  constructor(public payload: { store: Store }) {
  }
}

export type Actions =
  StartPrimaryStoreLoadAction
  | LoadPrimaryStoreAction
  | LoadStoreAction;
