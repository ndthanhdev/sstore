import {ActionTypes} from '../actions/auth.action';
import {User} from '../../models/user.model';
/**
 * Created by vunguyenhung on 5/5/17.
 */

export interface State {
  loading: boolean;
  user: User | null;
  message: string;
  error: any;
}


export const initialState = {
  loading: false,
  user: null,
  message: null,
  error: null
};


export function reducer(state: State = initialState, action): State {
  switch (action.type) {

    case ActionTypes.START_REGISTER:
    case ActionTypes.START_LOGIN:
      return Object.assign({}, state, {
        loading: true
      });

    case ActionTypes.LOGIN_FAIL:
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        message: action.payload.message
      });

    case ActionTypes.LOGIN:
      return Object.assign({}, state, {
        user: action.payload.user
      });

    case ActionTypes.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        message: action.payload.message
      });

    case ActionTypes.REGISTER_FAIL:
      return Object.assign({}, state, {
        loading: false,
      });

    case ActionTypes.REGISTER:
      return Object.assign({}, state, {
        message: action.payload.message
      });

    case ActionTypes.LOGOUT:
      return Object.assign({}, state, {
        loading: false,
        user: null,
        message: null
      });

    default:
      return state;
  }
}

export const getLoading = (state: State) => state.loading;

export const getUser = (state: State) => state.user;

export const getMessage = (state: State) => state.message;
