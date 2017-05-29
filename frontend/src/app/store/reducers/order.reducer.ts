import {Order} from '../../models/order.model';
import {Page} from '../../models/page.model';


import * as orderAction from '../actions/order.action';
/**
 * Created by vunguyenhung on 5/25/17.
 */

export interface State {
  loading: boolean;
  loaded: boolean;
  error: any;
  orders: Page<Order>;
  order: Order;
  createdOrderId: number;
}


export const initialState: State = {
  loading: false,
  loaded: false,
  error: null,
  orders: null,
  order: null,
  createdOrderId: null
};

export function reducer(state: State = initialState, action): State {
  switch (action.type) {

    case orderAction.ActionTypes.START_ORDER_LOAD:
    case orderAction.ActionTypes.START_ORDERS_LOAD:
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });

    case orderAction.ActionTypes.LOAD_ORDERS:
      return Object.assign({}, state, {
        orders: action.payload.orders,
        loaded: true,
        loading: false
      });

    case orderAction.ActionTypes.LOAD_ORDER:
      return Object.assign({}, state, {
        order: action.payload.order,
        loaded: true,
        loading: false
      });

    case orderAction.ActionTypes.CREATE_ORDER:
      return Object.assign({}, state, {
        createdOrderId: action.payload.createdOrderId
      });

    default:
      return state;
  }

}

export const getOrders = (state: State) => state.orders;
export const getOrder = (state: State) => state.order;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getCreatedOrderId = (state: State) => state.createdOrderId;

