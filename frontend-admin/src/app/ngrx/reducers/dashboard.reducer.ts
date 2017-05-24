import * as dashBoardAction from "../actions/dashboard.action";

export interface State {
  noUsers: number;
  noRemainingOrders: number;
  noBadReviews: number;
}

export const initialState: State = {
  noUsers: null,
  noRemainingOrders: null,
  noBadReviews: null,
};

export function reducer(state: State = initialState, action): State {
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

    default:
      return state;
  }
}

export const getNoUsers = (state: State) => state.noUsers;
export const getNoRemainingOrders = (state: State) => state.noRemainingOrders;
export const getNoBadReviews = (state: State) => state.noBadReviews;

