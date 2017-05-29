import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {PaginatedListOfProducts, Products} from "../../models/models";

export const ActionTypes = {

  START_PRODUCTS_LOAD: type('[Dashboard] Start Products Load'),
  LOAD_PRODUCTS: type('[Dashboard] Load Products'),

  START_PRODUCT_DETAIL_LOAD: type('[Dashboard] Start Product Detail Load'),
  LOAD_PRODUCT_DETAIL: type('[Dashboard] Load Product Detail'),

};


export class StartProductsLoadAction implements Action {
  type = ActionTypes.START_PRODUCTS_LOAD;

  constructor(public payload: { page: number }) {
  }
}

export class LoadProductsAction implements Action {
  type = ActionTypes.LOAD_PRODUCTS;

  constructor(public payload: { paginatedListOfProducts: PaginatedListOfProducts }) {
  }
}


export class StartProductDetailLoadAction implements Action {
  type = ActionTypes.START_PRODUCT_DETAIL_LOAD;

  constructor(public payload: { id: number }) {
  }
}

export class LoadProductDetailAction implements Action {
  type = ActionTypes.LOAD_PRODUCT_DETAIL;

  constructor(public payload: { product: Products }) {
  }
}

export type Actions = StartProductsLoadAction
  | LoadProductsAction
  | StartProductDetailLoadAction
  | LoadProductDetailAction;
