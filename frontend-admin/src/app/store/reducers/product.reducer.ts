import * as productAction from "../actions/product.action";
import {Action} from "@ngrx/store";
import {PaginatedListOfProducts, Products} from "../../models/models";

export interface State {
  isBusy: boolean;
  paginatedListOfProducts: PaginatedListOfProducts;
  product: Products;
}

export const initialState: State = {
  isBusy: false,
  paginatedListOfProducts: null,
  product: null
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    // load products
    case productAction.ActionTypes.START_PRODUCTS_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case productAction.ActionTypes.LOAD_PRODUCTS:
      return Object.assign({}, state, {
        isBusy: false,
        paginatedListOfProducts: action.payload.paginatedListOfProducts
      });

    // load product detail
    case productAction.ActionTypes.START_PRODUCT_DETAIL_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case productAction.ActionTypes.LOAD_PRODUCT_DETAIL:
      return Object.assign({}, state, {
        isBusy: false,
        product: action.payload.product
      });

    default:
      return state;
  }
}

export const getIsBusy = (state: State) => state.isBusy;
export const getPaginatedListOfProducts = (state: State) => state.paginatedListOfProducts;
export const getProduct = (state: State) => state.product;
