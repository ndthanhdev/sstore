import {ActiveCart, Cart} from '../../models/cart.model';


import * as cartActions from '../actions/cart.action';

import * as authActions from '../actions/auth.action';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export interface State {
  loading: boolean;
  loaded: boolean;
  modifying: boolean;
  error: any;
  cart: Cart;
  activeCart: ActiveCart;
  createdCartId: number;
}


export const initialState: State = {
  loading: false,
  loaded: false,
  modifying: false,
  error: null,
  cart: null,
  activeCart: null,
  createdCartId: null
};

export function reducer(state: State = initialState, action): State {
  switch (action.type) {

    case cartActions.ActionTypes.START_LOCAL_ACTIVE_CART_LOAD:
    case cartActions.ActionTypes.START_ACTIVE_CART_LOAD:
    case cartActions.ActionTypes.START_CART_LOAD:
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });

    case cartActions.ActionTypes.START_CART_DETAIL_QUANTITY_EDIT:
      return Object.assign({}, state, {
        modifying: true
      });

    case cartActions.ActionTypes.EDIT_CART_DETAIL_QUANTITY:
      return Object.assign({}, state, {
        cart: Object.assign({}, state.cart, {
          details: state.cart.details.map(detail => {
            if (detail.id === action.payload.cartDetailId) {
              return Object.assign({}, detail, {quantity: action.payload.quantity});
            } else {
              return detail;
            }
          })
        }),
        activeCart: Object.assign({}, state.activeCart, {
          item_count: state.activeCart.item_count + action.payload.quantityOffset
        }),
        modifying: false
      });

    case cartActions.ActionTypes.LOAD_CART:
      return Object.assign({}, state, {
        cart: action.payload.cart,
        loaded: true,
        loading: false
      });

    case cartActions.ActionTypes.LOAD_LOCAL_ACTIVE_CART:
    case cartActions.ActionTypes.LOAD_ACTIVE_CART:
      return Object.assign({}, state, {
        activeCart: action.payload.activeCart,
        loaded: true,
        loading: false
      });

    case cartActions.ActionTypes.START_LOCAL_PRODUCT_ADD:
    case cartActions.ActionTypes.START_PRODUCT_ADD:
      return Object.assign({}, state, {
        loading: true
      });

    case cartActions.ActionTypes.ADD_LOCAL_PRODUCT:
    case cartActions.ActionTypes.ADD_PRODUCT:
      let item_count = 0;
      if (state.activeCart) {
        item_count = state.activeCart.item_count;
      }
      return Object.assign({}, state, {
        activeCart: Object.assign({}, state.activeCart, {
          item_count: item_count + action.payload.cartDetail.quantity
        }),
        loading: false
      });

    case cartActions.ActionTypes.DELETE_PRODUCT:
      return Object.assign({}, state, {
        cart: Object.assign({}, state.cart, {
          details: state.cart.details.filter(detail => detail.id !== action.payload.cartDetailId)
        }),
        activeCart: Object.assign({}, state.activeCart, {
          item_count: state.activeCart.item_count - action.payload.quantity
        })
      });

    case cartActions.ActionTypes.CREATE_CART:
      return Object.assign({}, state, {
        createdCartId: action.payload.createdCartId
      });

    case authActions.ActionTypes.LOGOUT:
      return Object.assign({}, state, {
        activeCart: null
      });


    default:
      return state;
  }

}

export const getCart = (state: State) => state.cart;
export const getActiveCart = (state: State) => state.activeCart;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getModifying = (state: State) => state.modifying;
