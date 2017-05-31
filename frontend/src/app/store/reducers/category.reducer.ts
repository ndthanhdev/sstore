import {Category} from '../../models/category.model';
import * as categoryActions from '../actions/category.action';
import {ProductSummary} from '../../models/product.model';
import {Page} from '../../models/page.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export interface State {
  loading: boolean;
  loaded: boolean;
  error: any;
  catalogParentCategories: Category[];
  category: Category;
  products: Page<ProductSummary>;
  productsLoading: boolean;
}


export const initialState: State = {
  loading: false,
  loaded: false,
  error: null,
  catalogParentCategories: null,
  category: null,
  products: null,
  productsLoading: false
};

export function reducer(state: State = initialState, action): State {
  switch (action.type) {


    case categoryActions.ActionTypes.START_CATEGORY_LOAD:
    case categoryActions.ActionTypes.START_CATALOG_PARENT_CATEGORIES_LOAD:
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });

    case categoryActions.ActionTypes.LOAD_CATEGORY:
      return Object.assign({}, state, {
        category: action.payload.category,
        loaded: true,
        loading: false
      });

    case categoryActions.ActionTypes.LOAD_CATALOG_PARENT_CATEGORIES:
      return Object.assign({}, state, {
        catalogParentCategories: action.payload.catalogParentCategories,
        loaded: true,
        loading: false
      });

    case categoryActions.ActionTypes.START_CATEGORY_PRODUCTS_LOAD:
      return Object.assign({}, state, {
        productsLoading: true
      });

    case categoryActions.ActionTypes.LOAD_CATEGORY_PRODUCTS:
      return Object.assign({}, state, {
        products: action.payload.products,
        productsLoading: false
      });

    default:
      return state;
  }
}

export const getCatalogParentCategories = (state: State) => state.catalogParentCategories;
export const getLoading = (state: State) => state.loading;
export const getProductsLoading = (state: State) => state.productsLoading;
export const getLoaded = (state: State) => state.loaded;
export const getCategory = (state: State) => state.category;
export const getProducts = (state: State) => state.products;


