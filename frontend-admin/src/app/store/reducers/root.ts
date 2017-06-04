import * as Reselect from 'reselect';

import * as fromDashboard from "../reducers/dashboard.reducer";
import * as fromProduct from "../reducers/product.reducer";
import * as fromReview from "../reducers/review.reducer";
import * as fromStore from "../reducers/store.reducer";
import * as fromAuth from "../reducers/auth.reducer";
import * as fromOrder from "../reducers/order.reducer";
import {ActionReducer, combineReducers} from "@ngrx/store";
import {compose} from "@ngrx/core";
import {storeFreeze} from "ngrx-store-freeze";
import {environment} from "environments/environment";
import {routerReducer, RouterState} from "@ngrx/router-store";

export interface State {
  router: RouterState;
  dashboard: fromDashboard.State;
  product: fromProduct.State;
  review: fromReview.State;
  store: fromStore.State;
  auth: fromAuth.State;
  order: fromOrder.State;
}

export const reducers = {
  router: routerReducer,
  dashboard: fromDashboard.reducer,
  product: fromProduct.reducer,
  review: fromReview.reducer,
  store: fromStore.reducer,
  auth: fromAuth.reducer,
  order: fromOrder.reducer
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

// dashboard
export const getDashboardState = (state: State) => state.dashboard;

export const getDashboardNoUsers = Reselect.createSelector(getDashboardState, fromDashboard.getNoUsers);
export const getDashboardNoRemainingOrders = Reselect.createSelector(getDashboardState, fromDashboard.getNoRemainingOrders);
export const getDashboardNoBadReviews = Reselect.createSelector(getDashboardState, fromDashboard.getNoBadReviews);
export const getDashboardMonthSales = Reselect.createSelector(getDashboardState, fromDashboard.getMonthSales);
export const getDashboardReviewPercents = Reselect.createSelector(getDashboardState, fromDashboard.getReviewPercents);
export const getDashboardRecentUsers = Reselect.createSelector(getDashboardState, fromDashboard.getRecentUsers);

// product
export const getProductState = (state: State) => state.product;

export const getProductIsBusy = Reselect.createSelector(getProductState, fromProduct.getIsBusy);
export const getProductProduct = Reselect.createSelector(getProductState, fromProduct.getProduct);
export const getProductPaginatedListOfProducts = Reselect.createSelector(getProductState, fromProduct.getPaginatedListOfProducts);
export const getProductPaginatedListOfProductVariants = Reselect.createSelector(getProductState, fromProduct.getpaginatedListOfProductVariants);

// review
export const getReviewState = (state: State) => state.review;

export const getReviewIsBusy = Reselect.createSelector(getReviewState, fromReview.getIsBusy);
export const getReviewReviews = Reselect.createSelector(getReviewState, fromReview.getPaginatedListOfReviews);

// store
export const getStoreState = (state: State) => state.store;

export const getStoreIsBusy = Reselect.createSelector(getStoreState, fromStore.getIsBusy);
export const getStoreStores = Reselect.createSelector(getStoreState, fromStore.getStores);
export const getStorePaginatedListOfStores = Reselect.createSelector(getStoreState, fromStore.getPaginatedListOfStores);


// store
export const getAuthState = (state: State) => state.auth;

export const getAuthIsBusy = Reselect.createSelector(getAuthState, fromAuth.getIsBusy);
export const getAuthAccount = Reselect.createSelector(getAuthState, fromAuth.getAccount);

// order
export const getOrderState = (state: State) => state.order;

export const getOrderIsBusy = Reselect.createSelector(getOrderState, fromOrder.getIsBusy);
export const getOrderPaginatedListOfProducts = Reselect.createSelector(getOrderState, fromOrder.getPaginatedListOfProducts);
