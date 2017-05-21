import {Cart} from '../../models/cart.model';


import * as cartActions from '../actions/cart.action';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export interface State {
  loading: boolean;
  loaded: boolean;
  error: any;
  cart: Cart;
}


export const initialState: State = {
  loading: false,
  loaded: false,
  error: null,
  cart: null,
};

export function reducer(state: State = initialState, action): State {
  switch (action.type) {
    case cartActions.ActionTypes.START_CART_LOAD:
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });

    case cartActions.ActionTypes.LOAD_CART:
      return Object.assign({}, state, {
        cart: action.payload.cart,
        loaded: true,
        loading: false
      });

    case cartActions.ActionTypes.START_PRODUCT_ADD:
      return Object.assign({}, state, {
        loading: true
      });

    case cartActions.ActionTypes.ADD_PRODUCT:
      return Object.assign({}, state, {
        loading: false
      });

    default:
      return state;
  }

}

export const getCart = (state: State) => state.cart;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
