import * as authAction from "../actions/auth.action";
import {forEach} from "@angular/router/src/utils/collection";
import {Action} from "@ngrx/store";
import {Accounts} from "../../models/models";

export interface State {
  account: Accounts;
}

export const initialState: State = {
  account: null
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    // no users
    case authAction.ActionTypes.START_LOGIN:
      return Object.assign({}, state, {});


    case authAction.ActionTypes.START_LOGGED_ACCOUNT_LOAD:
      return Object.assign({}, state, {});
    case authAction.ActionTypes.LOAD_LOGGED_ACCOUNT:
      return Object.assign({}, state, {
        account: action.payload.account
      });

    default:
      return state;
  }
}

export const getAccount = (state: State) => state.account;
