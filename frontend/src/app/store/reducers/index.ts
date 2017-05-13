/**
 * Created by vunguyenhung on 5/13/17.
 */


import * as Reselect from 'reselect';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from 'environments/environment';

import * as fromCatalog from './catalog.reducer';
import * as fromCategory from './category.reducer';
import * as fromProduct from './product.reducer';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  catalog: fromCatalog.State;
  category: fromCategory.State;
  product: fromProduct.State;
  router: fromRouter.RouterState;
}

export const reducers = {
  catalog: fromCatalog.reducer,
  category: fromCategory.reducer,
  product: fromProduct.reducer,
  router: fromRouter.routerReducer,
};


const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getCatalogState = (state: State) => state.catalog;
export const getCategoryState = (state: State) => state.category;
export const getProductState = (state: State) => state.product;


export const getCatalogCatalogs = Reselect.createSelector(getCatalogState, fromCatalog.getCatalogs);

export const getCategoryCatalogParentCategories = Reselect.createSelector(getCategoryState, fromCategory.getCatalogParentCategories);

export const getProductCatalogProducts = Reselect.createSelector(getProductState, fromProduct.getCatalogProducts);

export const getProductloading = Reselect.createSelector(getProductState, fromProduct.getLoading);
