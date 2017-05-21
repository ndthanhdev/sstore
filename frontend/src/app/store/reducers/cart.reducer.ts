import {ActiveCart, Cart} from '../../models/cart.model';


import * as cartActions from '../actions/cart.action';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export interface State {
  loading: boolean;
  loaded: boolean;
  error: any;
  cart: Cart;
  activeCart: ActiveCart;
}


export const initialState: State = {
  loading: false,
  loaded: false,
  error: null,
  cart: null,
  activeCart: null
};

export function reducer(state: State = initialState, action): State {
  switch (action.type) {

    case cartActions.ActionTypes.START_ACTIVE_CART_LOAD:
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

    case cartActions.ActionTypes.LOAD_ACTIVE_CART:
      return Object.assign({}, state, {
        activeCart: action.payload.activeCart,
        loaded: true,
        loading: false
      });

    case cartActions.ActionTypes.START_PRODUCT_ADD:
      return Object.assign({}, state, {
        loading: true
      });

    case cartActions.ActionTypes.ADD_PRODUCT:
      return Object.assign({}, state, {
        activeCart: Object.assign({}, state.activeCart, {
          product_count: state.activeCart.product_count + 1
        }),
        loading: false
      });

    case cartActions.ActionTypes.DELETE_PRODUCT:
      return Object.assign({}, state, {
        cart: Object.assign({}, state.cart, {
          details: state.cart.details.filter(detail => detail.id !== action.payload.cartDetailId)
        }),
        activeCart: Object.assign({}, state.activeCart, {
          product_count: state.activeCart.product_count - 1
        })
      });

    default:
      return state;
  }

}

export const getCart = (state: State) => state.cart;
export const getActiveCart = (state: State) => state.activeCart;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
