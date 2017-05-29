import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {PaginatedListOfProducts, PaginatedListOfProductVariants, Products} from "../../models/models";

export const ActionTypes = {

  START_PRODUCTS_LOAD: type('[Dashboard] Start Products Load'),
  LOAD_PRODUCTS: type('[Dashboard] Load Products'),

  START_PRODUCT_DETAIL_LOAD: type('[Dashboard] Start Product Detail Load'),
  LOAD_PRODUCT_DETAIL: type('[Dashboard] Load Product Detail'),

  START_PRODUCT_VARIANT_LOAD: type('[Dashboard] Start Product Variant Load'),
  LOAD_PRODUCT_VARIANT: type('[Dashboard] Load Product Variant'),

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


export class StartProductVariantsLoadAction implements Action {
  type = ActionTypes.START_PRODUCT_VARIANT_LOAD;

  constructor(public payload: { id: number, page: number }) {
  }
}

export class LoadProductVariantsAction implements Action {
  type = ActionTypes.LOAD_PRODUCT_VARIANT;

  constructor(public payload: { paginatedListOfProductVariants: PaginatedListOfProductVariants }) {
  }
}

export type Actions = StartProductsLoadAction
  | LoadProductsAction
  | StartProductDetailLoadAction
  | LoadProductDetailAction
  | StartProductVariantsLoadAction
  | LoadProductVariantsAction;
