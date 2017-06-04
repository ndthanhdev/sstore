import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export const ActionTypes = {

  // Login Actions
  START_LOGIN: type('[Auth] Start Login'),
  LOGIN_SUCCESS: type('[Auth] Login Success'),
  LOGIN_FAIL: type('[Auth] Login Fail'),
  LOGIN: type('[Auth] Login'),

  START_REGISTER: type('[Auth] Start Register'),
  REGISTER_SUCCESS: type('[Auth] Register Success'),

  REGISTER_FAIL: type('[Auth] Register Fail'),
  REGISTER: type('[Auth] Register'),

  START_LOGOUT: type('[Auth] Start Logout'),
  LOGOUT: type('[Auth] Logout')
};

export class StartLoginAction implements Action {
  type = ActionTypes.START_LOGIN;

  constructor(public payload: { username: string, password: string }) {
  }
}

export class LoginSuccessAction implements Action {
  type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { message: string }) {
  }
}

export class LoginFailAction implements Action {
  type = ActionTypes.LOGIN_FAIL;

  constructor(public payload: { message: string }) {
  }
}

export class LoginAction implements Action {
  type = ActionTypes.LOGIN;

  constructor(public payload: { user: User }) {
  }
}

export class StartRegisterAction implements Action {
  type = ActionTypes.START_REGISTER;

  constructor(public payload: { user: User }) {
  }
}

export class RegisterSuccessAction implements Action {
  type = ActionTypes.REGISTER_SUCCESS;

  constructor(public payload: { message: string }) {
  }
}

export class RegisterFailAction implements Action {
  type = ActionTypes.REGISTER_FAIL;

  constructor(public payload: { error: any }) {
  }
}

export class RegisterAction implements Action {
  type = ActionTypes.REGISTER;

  constructor(public payload: { message: string }) {
  }
}

// LOGOUT ACTIONS
export class StartLogoutAction implements Action {
  type = ActionTypes.START_LOGOUT;
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = StartLoginAction
  | LoginSuccessAction
  | LoginFailAction
  | LoginAction
  | StartRegisterAction
  | RegisterSuccessAction
  | RegisterFailAction
  | RegisterAction
  | LogoutAction
  | StartLogoutAction;


