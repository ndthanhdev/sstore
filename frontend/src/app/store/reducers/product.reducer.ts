import {ProductSummary} from '../../models/product.model';
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
}

export const initialState: State = {
  loading: false,
  loaded: false,
  error: null,
  catalogProducts: null
};


export function reducer(state: State = initialState, action): State {
  switch (action.type) {
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

    default:
      return state;
  }

}

export const getCatalogProducts = (state: State) => state.catalogProducts;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;

