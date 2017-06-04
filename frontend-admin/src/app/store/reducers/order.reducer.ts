import * as orderAction from "../actions/order.action";
import {
  PaginatedListOfOrders
} from "../../models/models";
import {Action} from "@ngrx/store";

export interface State {
  isBusy: boolean;
  paginatedListOfOrders: PaginatedListOfOrders;
}

export const initialState: State = {
  isBusy: false,
  paginatedListOfOrders: null,
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    // load products
    case orderAction.ActionTypes.START_ORDERS_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case orderAction.ActionTypes.LOAD_ORDERS:
      return Object.assign({}, state, {
        isBusy: false,
        paginatedListOfOrders: action.payload.paginatedListOfOrders
      });


    default:
      return state;
  }
}

export const getIsBusy = (state: State) => state.isBusy;
export const getPaginatedListOfProducts = (state: State) => state.paginatedListOfOrders;
