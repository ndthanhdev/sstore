import * as storeAction from "../actions/store.action";
import {forEach} from "@angular/router/src/utils/collection";
import {Action} from "@ngrx/store";
import {PaginatedListOfStores} from "../../models/models";

export interface State {
  isBusy: boolean;
  paginatedListOfStores: PaginatedListOfStores;
}

export const initialState: State = {
  isBusy: false,
  paginatedListOfStores: null
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    // no users
    case storeAction.ActionTypes.START_STORE_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case storeAction.ActionTypes.LOAD_STORE:
      return Object.assign({}, state, {
        isBusy: false,
        paginatedListOfStores: action.payload.paginatedListOfStores
      });


    default:
      return state;
  }
}

export const getIsBusy = (state: State) => state.isBusy;
export const getPaginatedListOfStores = (state: State) => state.paginatedListOfStores;
