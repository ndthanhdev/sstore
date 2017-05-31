import * as Reselect from 'reselect';

import * as fromDashboard from "../reducers/dashboard.reducer";
import * as fromProduct from "../reducers/product.reducer";
import * as fromReview from "../reducers/review.reducer";
import {ActionReducer, combineReducers} from "@ngrx/store";
import {compose} from "@ngrx/core";
import {storeFreeze} from "ngrx-store-freeze";
import {environment} from "environments/environment";

export interface State {
  dashboard: fromDashboard.State;
  product: fromProduct.State;
  review: fromReview.State;
}

export const reducers = {
  dashboard: fromDashboard.reducer,
  product: fromProduct.reducer,
  review: fromReview.reducer,
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
