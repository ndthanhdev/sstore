import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {Accounts} from "../../models/models";

export const ActionTypes = {

  START_LOGIN: type('[Auth] Start Login'),

  START_LOGGED_ACCOUNT_LOAD: type('[Auth] Start Logged Account Load'),
  LOAD_LOGGED_ACCOUNT: type('[Auth] Load Logged Account'),

  START_LOGOUT :type('[Auth] Start Logout'),
  LOGOUT :type('[Auth] Logout'),

};


export class StartLoginAction implements Action {
  type = ActionTypes.START_LOGIN;

  constructor(public payload: { username: string, password: string }) {
  }
}


export class StartLoggedAccountLoadAction implements Action {
  type = ActionTypes.START_LOGGED_ACCOUNT_LOAD;
  constructor(public payload: { id: number }) {
  }
}

export class LoadLoggedAccountAction implements Action {
  type = ActionTypes.LOAD_LOGGED_ACCOUNT;

  constructor(public payload: { account: Accounts }) {
  }
}

export class StartLogoutAction implements Action {
  type = ActionTypes.START_LOGOUT;
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;
}

