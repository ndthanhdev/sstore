import * as Reselect from 'reselect';

import * as fromDashboard from "../reducers/dashboard.reducer";
import {ActionReducer, combineReducers} from "@ngrx/store";
import {compose} from "@ngrx/core";
import {storeFreeze} from "ngrx-store-freeze";
import {environment} from "environments/environment";

export interface State {
  dashboard: fromDashboard.State;
}

export const reducers = {
  dashboard: fromDashboard.reducer,
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

// state
export const getDashboardState = (state: State) => state.dashboard;

export const getDashboardNoUsers = Reselect.createSelector(getDashboardState, fromDashboard.getNoUsers);
export const getDashboardNoRemainingOrders = Reselect.createSelector(getDashboardState, fromDashboard.getNoRemainingOrders);
export const getDashboardNoBadReviews = Reselect.createSelector(getDashboardState, fromDashboard.getNoBadReviews);
export const getDashboardReviewPercents = Reselect.createSelector(getDashboardState, fromDashboard.getReviewPercents);
export const getDashboardRecentUsers = Reselect.createSelector(getDashboardState, fromDashboard.getRecentUsers);
