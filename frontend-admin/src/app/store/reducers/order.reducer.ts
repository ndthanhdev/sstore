import * as orderAction from "../actions/order.action";
import {
  Orders,
  PaginatedListOfOrders
} from "../../models/models";
import {Action} from "@ngrx/store";

export interface State {
  isBusy: boolean;
  paginatedListOfOrders: PaginatedListOfOrders;
  order: Orders;
}

export const initialState: State = {
  isBusy: false,
  paginatedListOfOrders: null,
  order: null
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    case orderAction.ActionTypes.START_ORDERS_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case orderAction.ActionTypes.LOAD_ORDERS:
      return Object.assign({}, state, {
        isBusy: false,
        paginatedListOfOrders: action.payload.paginatedListOfOrders
      });

    case orderAction.ActionTypes.START_ORDER_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case orderAction.ActionTypes.LOAD_ORDER:
      return Object.assign({}, state, {
        isBusy: false,
        order: action.payload.order
      });

    default:
      return state;
  }
}

export const getIsBusy = (state: State) => state.isBusy;
export const getPaginatedListOfProducts = (state: State) => state.paginatedListOfOrders;
export const getOrder = (state: State) => state.order;
