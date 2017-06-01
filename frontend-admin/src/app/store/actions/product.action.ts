import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {
  PaginatedListOfProducts, PaginatedListOfProductVariants, Products,
  StoreProductVariant
} from "../../models/models";
import {Response} from "@angular/http";

export const ActionTypes = {

  START_PRODUCTS_LOAD: type('[Dashboard] Start Products Load'),
  LOAD_PRODUCTS: type('[Dashboard] Load Products'),

  START_PRODUCT_DETAIL_LOAD: type('[Dashboard] Start Product Detail Load'),
  LOAD_PRODUCT_DETAIL: type('[Dashboard] Load Product Detail'),

  START_PRODUCT_VARIANT_LOAD: type('[Dashboard] Start Product Variant Load'),
  LOAD_PRODUCT_VARIANT: type('[Dashboard] Load Product Variant'),

  START_STORE_PRODUCT_VARIANT_UPDATE: type('[Dashboard] Start Store Product Variant Update'),
  UPDATE_STORE_PRODUCT_VARIANT: type('[Dashboard] Update Store Product Variant'),

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


export class StartStoreProductVariantsUpdateAction implements Action {
  type = ActionTypes.START_STORE_PRODUCT_VARIANT_UPDATE;

  constructor(public payload: { storeProductVariant: StoreProductVariant }) {
  }
}

export class UpdateStoreProductVariantsAction implements Action {
  type = ActionTypes.UPDATE_STORE_PRODUCT_VARIANT;

  constructor(public payload: { response: Response, storeProductVariant: StoreProductVariant }) {
  }
}

export type Actions = StartProductsLoadAction
  | LoadProductsAction
  | StartProductDetailLoadAction
  | LoadProductDetailAction
  | StartProductVariantsLoadAction
  | LoadProductVariantsAction
  | StartStoreProductVariantsUpdateAction
  | UpdateStoreProductVariantsAction;
