import * as authAction from "../actions/auth.action";
import {forEach} from "@angular/router/src/utils/collection";
import {Action} from "@ngrx/store";
import {Accounts} from "../../models/models";
import {go} from "@ngrx/router-store";

export interface State {
  account: Accounts;
  isBusy: boolean;
}

export const initialState: State = {
  account: null,
  isBusy: false
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    case authAction.ActionTypes.START_LOGIN:
      return Object.assign({}, state, {
        isBusy: true
      });


    case authAction.ActionTypes.START_LOGGED_ACCOUNT_LOAD:
      return Object.assign({}, state, {});
    case authAction.ActionTypes.LOAD_LOGGED_ACCOUNT:
      return Object.assign({}, state, {
        account: action.payload.account,
        isBusy: false,
      });

    case authAction.ActionTypes.START_LOGOUT:
      return Object.assign({}, state, {});
    case authAction.ActionTypes.LOGOUT:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export const getAccount = (state: State) => state.account;
export const getIsBusy = (state: State) => state.isBusy;
