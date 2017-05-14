import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Product, ProductSummary} from '../../models/product.model';
import {Page} from '../../models/page.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export const ActionTypes = {
  START_CATALOG_PRODUCTS_LOAD: type('[Product] Catalog Products Load'),
  LOAD_CATALOG_PRODUCTS: type('[Product] Load Catalog Products'),

  START_PRODUCT_LOAD: type('[Product] Start Product Load'),
  LOAD_PRODUCT: type('[Product] Load Product')
};

export class StartCatalogProductsLoadAction implements Action {
  type = ActionTypes.START_CATALOG_PRODUCTS_LOAD;

  constructor(public payload: { catalogId: number, page: number }) {

  }
}

export class LoadCatalogProductsAction implements Action {
  type = ActionTypes.LOAD_CATALOG_PRODUCTS;

  constructor(public payload: { catalogProducts: Page<ProductSummary> }) {

  }
}

export class StartProductLoadAction implements Action {
  type = ActionTypes.START_PRODUCT_LOAD;

  constructor(public payload: { productId: number }) {

  }
}

export class LoadProductAction implements Action {
  type = ActionTypes.LOAD_PRODUCT;

  constructor(public payload: { product: Product }) {

  }
}

export type Actions =
  StartCatalogProductsLoadAction |
  LoadCatalogProductsAction |
  StartProductLoadAction |
  LoadProductAction;
