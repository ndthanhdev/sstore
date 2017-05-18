import {Store} from '../../models/store.model';

import * as storeActions from '../actions/store.action';
/**
 * Created by vunguyenhung on 5/18/17.
 */


export interface State {
  loading: boolean;
  loaded: boolean;
  error: any;
  primaryStore: Store;
  store: Store;
}


export const initialState: State = {
  loading: false,
  loaded: false,
  error: null,
  primaryStore: null,
  store: null
};

export function reducer(state: State = initialState, action: storeActions.Actions): State {
  switch (action.type) {
    case storeActions.ActionTypes.START_PRIMARY_STORE_LOAD:
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });

    case storeActions.ActionTypes.LOAD_PRIMARY_STORE:
      return Object.assign({}, state, {
        primaryStore: action.payload.primaryStore,
        loaded: true,
        loading: false
      });

    case storeActions.ActionTypes.LOAD_STORE:
      return Object.assign({}, state, {
        store: action.payload.store,
        loaded: true,
        loading: false
      });

    default:
      return state;
  }
}

export const getPrimaryStore = (state: State) => state.primaryStore;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getStore = (state: State) => state.store;
