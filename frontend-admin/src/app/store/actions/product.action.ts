import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {
  CustomAttributes,
  PaginatedListOfProducts, PaginatedListOfProductVariants, Products, ProductTypeAttributeValues, ProductVariationValues,
  StoreProductVariant
} from "../../models/models";
import {Response} from "@angular/http";

export const ActionTypes = {

  START_PRODUCTS_LOAD: type('[Product] Start Products Load'),
  LOAD_PRODUCTS: type('[Product] Load Products'),

  START_PRODUCT_DETAIL_LOAD: type('[Product] Start Product Detail Load'),
  LOAD_PRODUCT_DETAIL: type('[Product] Load Product Detail'),

  START_PRODUCT_VARIANT_LOAD: type('[Product] Start Product Variant Load'),
  LOAD_PRODUCT_VARIANT: type('[Product] Load Product Variant'),

  START_PRODUCT_TYPE_ATTRIBUTE_VALUE_UPDATE: type('[Product] Start Product Type Attribute Value Update'),
  UPDATE_PRODUCT_TYPE_ATTRIBUTE_VALUE: type('[Product] Update Product Type Attribute Value'),

  START_CUSTOM_ATTRIBUTE_UPDATE: type('[Product] Start Custom Attribute Update'),
  UPDATE_CUSTOM_ATTRIBUTE_VALUE: type('[Product] Update Custom Attribute'),

  START_PRODUCT_VARIANT_VALUE_UPDATE: type('[Product] Start Product Variation Value Update'),
  UPDATE_PRODUCT_VARIANT_VALUE: type('[Product] Update Product Variation Value'),

  START_STORE_PRODUCT_VARIANT_UPDATE: type('[Product] Start Store Product Variant Update'),
  UPDATE_STORE_PRODUCT_VARIANT: type('[Product] Update Store Product Variant'),
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


export class StartProductTypeAttributeValueUpdateAction implements Action {
  type = ActionTypes.START_PRODUCT_TYPE_ATTRIBUTE_VALUE_UPDATE;

  constructor(public payload: { productTypeAttributeValue: ProductTypeAttributeValues }) {
  }
}

export class UpdateProductTypeAttributeValueAction implements Action {
  type = ActionTypes.UPDATE_PRODUCT_TYPE_ATTRIBUTE_VALUE;

  constructor(public payload: { response: Response, productTypeAttributeValue: ProductTypeAttributeValues }) {
  }
}


export class StartCustomAttributeUpdateAction implements Action {
  type = ActionTypes.START_CUSTOM_ATTRIBUTE_UPDATE;

  constructor(public payload: { customAttribute: CustomAttributes }) {
  }
}

export class UpdateCustomAttributeAction implements Action {
  type = ActionTypes.UPDATE_CUSTOM_ATTRIBUTE_VALUE;

  constructor(public payload: { response: Response, customAttribute: CustomAttributes }) {
  }
}


export class StartProductVariationValueUpdateAction implements Action {
  type = ActionTypes.START_PRODUCT_VARIANT_VALUE_UPDATE;

  constructor(public payload: { productVariationValue: ProductVariationValues }) {
  }
}

export class UpdateProductVariationValueAction implements Action {
  type = ActionTypes.UPDATE_PRODUCT_VARIANT_VALUE;

  constructor(public payload: { response: Response, productVariationValue: ProductVariationValues }) {
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
