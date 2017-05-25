/**
 * Created by vunguyenhung on 5/13/17.
 */


import * as Reselect from 'reselect';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from 'environments/environment';

import * as fromAuth from './auth.reducer';
import * as fromLayout from './layout.reducer';
import * as fromCatalog from './catalog.reducer';
import * as fromCategory from './category.reducer';
import * as fromProduct from './product.reducer';
import * as fromStore from './store.reducer';
import * as fromCart from './cart.reducer';
import * as fromOrder from './order.reducer';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  auth: fromAuth.State;
  layout: fromLayout.State;
  catalog: fromCatalog.State;
  category: fromCategory.State;
  product: fromProduct.State;
  store: fromStore.State;
  cart: fromCart.State;
  order: fromOrder.State;
  router: fromRouter.RouterState;
}

export const reducers = {
  auth: fromAuth.reducer,
  layout: fromLayout.reducer,
  catalog: fromCatalog.reducer,
  category: fromCategory.reducer,
  product: fromProduct.reducer,
  store: fromStore.reducer,
  cart: fromCart.reducer,
  order: fromOrder.reducer,
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

export const getAuthState = (state: State) => state.auth;
export const getLayoutState = (state: State) => state.layout;
export const getCatalogState = (state: State) => state.catalog;
export const getCategoryState = (state: State) => state.category;
export const getProductState = (state: State) => state.product;
export const getStoreState = (state: State) => state.store;
export const getCartState = (state: State) => state.cart;
export const getOrderState = (state: State) => state.order;


export const getAuthLoading = Reselect.createSelector(getAuthState, fromAuth.getLoading);
export const getAuthUser = Reselect.createSelector(getAuthState, fromAuth.getUser);
export const getAuthMessage = Reselect.createSelector(getAuthState, fromAuth.getMessage);

export const getLayoutCoordinates = Reselect.createSelector(getLayoutState, fromLayout.getCoordinates);

export const getCatalogCatalogs = Reselect.createSelector(getCatalogState, fromCatalog.getCatalogs);

export const getCategoryCatalogParentCategories = Reselect.createSelector(getCategoryState, fromCategory.getCatalogParentCategories);

export const getProductCatalogProducts = Reselect.createSelector(getProductState, fromProduct.getCatalogProducts);
export const getProductProduct = Reselect.createSelector(getProductState, fromProduct.getProduct);
export const getProductLoading = Reselect.createSelector(getProductState, fromProduct.getLoading);

export const getStoreStore = Reselect.createSelector(getStoreState, fromStore.getStore);
export const getStoreLoading = Reselect.createSelector(getStoreState, fromStore.getLoading);

export const getCartCart = Reselect.createSelector(getCartState, fromCart.getCart);
export const getCartActiveCart = Reselect.createSelector(getCartState, fromCart.getActiveCart);
export const getCartLoading = Reselect.createSelector(getCartState, fromCart.getLoading);

export const getOrderOrders = Reselect.createSelector(getOrderState, fromOrder.getOrders);
export const getOrderLoading = Reselect.createSelector(getOrderState, fromOrder.getLoading);



