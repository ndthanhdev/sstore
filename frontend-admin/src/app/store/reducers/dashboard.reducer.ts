import * as dashBoardAction from "../actions/dashboard.action";
import {forEach} from "@angular/router/src/utils/collection";
import {Action} from "@ngrx/store";

export interface State {
  noUsers: number;
  noRemainingOrders: number;
  noBadReviews: number;
  monthSales: any[][];
  reviewPercents: any[][];
  recentUsers: any[][];
}

export const initialState: State = {
  noUsers: 0,
  noRemainingOrders: 0,
  noBadReviews: 0,
  monthSales: [
    ['Day', 'Revenue']
  ],
  reviewPercents: [
    ['Stars', 'Count'],
  ],
  recentUsers: [
    ['User Count', 'Time']
  ]
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    // no users
    case dashBoardAction.ActionTypes.START_NO_USERS_LOAD:
      return Object.assign({}, state, {});
    case dashBoardAction.ActionTypes.LOAD_NO_USERS:
      return Object.assign({}, state, {
        noUsers: action.payload.noUsers
      });

    // no remaining orders
    case dashBoardAction.ActionTypes.START_NO_REMAINING_ORDERS_LOAD:
      return Object.assign({}, state, {});
    case dashBoardAction.ActionTypes.LOAD_NO_REMAINING_ORDERS:
      return Object.assign({}, state, {
        noRemainingOrders: action.payload.noRemainingOrders
      });

    // no bad reviews
    case dashBoardAction.ActionTypes.START_NO_BAD_REVIEWS_LOAD:
      return Object.assign({}, state, {});
    case dashBoardAction.ActionTypes.LOAD_NO_BAD_REVIEWS:
      return Object.assign({}, state, {
        noBadReviews: action.payload.noBadReviews
      });

    // month sales
    case dashBoardAction.ActionTypes.START_MONTH_SALES_LOAD:
      return Object.assign({}, state, {});
    case dashBoardAction.ActionTypes.LOAD_MONTH_SALES:
      let monthSales: any[][] = [
        ['Day', 'Revenue']
      ];
      monthSales = monthSales.concat(action.payload.monthSales);
      return Object.assign({}, state, {
        monthSales: monthSales
      });

    // review percents
    case dashBoardAction.ActionTypes.START_REVIEW_PERCENTS_LOAD:
      return Object.assign({}, state, {});
    case dashBoardAction.ActionTypes.LOAD_REVIEW_PERCENTS:
      let reviewPercents: any[][] = [
        ['Stars', 'Count']
      ];
      for (let i in action.payload.reviewPercents) {
        reviewPercents.push([action.payload.reviewPercents[i][0] + ' stars', action.payload.reviewPercents[i][1]]);
      }
      return Object.assign({}, state, {
        reviewPercents: reviewPercents
      });

    // recent users
    case dashBoardAction.ActionTypes.START_RECENT_USERS_LOAD:
      return Object.assign({}, state, {});
    case dashBoardAction.ActionTypes.LOAD_RECENT_USERS:
      let recentUsers: any[][] = [
        ['User Count', 'Time']
      ];
      recentUsers = recentUsers.concat(action.payload.recentUsers);
      return Object.assign({}, state, {
        recentUsers: recentUsers
      });

    default:
      return state;
  }
}

export const getNoUsers = (state: State) => state.noUsers;
export const getNoRemainingOrders = (state: State) => state.noRemainingOrders;
export const getNoBadReviews = (state: State) => state.noBadReviews;
export const getMonthSales = (state: State) => state.monthSales;
export const getReviewPercents = (state: State) => state.reviewPercents;
export const getRecentUsers = (state: State) => state.recentUsers;
