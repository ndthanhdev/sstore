import * as productAction from "../actions/product.action";
import {Action} from "@ngrx/store";
import {PaginatedListOfProducts, Products} from "../../models/models";

export interface State {
  paginatedListOfProducts: PaginatedListOfProducts;
}

export const initialState: State = {
  paginatedListOfProducts: null
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    // no users
    case productAction.ActionTypes.START_PRODUCTS_LOAD:
      return Object.assign({}, state, {});
    case productAction.ActionTypes.LOAD_PRODUCTS:
      return Object.assign({}, state, {
        paginatedListOfProducts: action.payload.paginatedListOfProducts
      });

    default:
      return state;
  }
}

export const getPaginatedListOfProducts = (state: State) => state.paginatedListOfProducts;

