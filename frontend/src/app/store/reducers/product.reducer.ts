import {Product, ProductSummary} from '../../models/product.model';
import {Page} from '../../models/page.model';
import * as productActions from '../actions/product.action';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export interface State {
  loading: boolean;
  loaded: boolean;
  error: any;
  catalogProducts: Page<ProductSummary>;
  product: Product;
}

export const initialState: State = {
  loading: false,
  loaded: false,
  error: null,
  catalogProducts: null,
  product: null
};


export function reducer(state: State = initialState, action): State {
  switch (action.type) {
    case productActions.ActionTypes.START_PRODUCT_LOAD:
    case productActions.ActionTypes.START_CATALOG_PRODUCTS_LOAD:
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });

    case productActions.ActionTypes.LOAD_CATALOG_PRODUCTS:
      return Object.assign({}, state, {
        catalogProducts: action.payload.catalogProducts,
        loaded: true,
        loading: false
      });

    case productActions.ActionTypes.LOAD_PRODUCT:
      return Object.assign({}, state, {
        product: action.payload.product,
        loaded: true,
        loading: false
      });

    default:
      return state;
  }

}

export const getCatalogProducts = (state: State) => state.catalogProducts;
export const getProduct = (state: State) => state.product;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;

