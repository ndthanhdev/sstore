import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {ProductSummary} from '../../models/product.model';
import {Page} from '../../models/page.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export const ActionTypes = {
  START_CATALOG_PRODUCTS_LOAD: type('[Product] Catalog Products Load'),
  LOAD_CATALOG_PRODUCTS: type('[Product] Load Catalog Products'),
};

export class StartCatalogProductsLoadAction implements Action {
  type = ActionTypes.START_CATALOG_PRODUCTS_LOAD;

  constructor(public payload: { catalogId: number }) {

  }
}

export class LoadCatalogProductsAction implements Action {
  type = ActionTypes.LOAD_CATALOG_PRODUCTS;

  constructor(public payload: { catalogProducts: Page<ProductSummary> }) {

  }
}

export type Actions = StartCatalogProductsLoadAction | LoadCatalogProductsAction;
