import * as dashBoardAction from "../actions/dashboard.action";

export interface State {
  loading: boolean;
  noUsers: number;
}

export const initialState: State = {
  loading: false,
  noUsers: NaN
};

export function reducer(state: State = initialState, action): State {
  switch (action.type) {

    case dashBoardAction.ActionTypes.START_NOUSERS_LOAD:
      return Object.assign({}, state, {
        loading: true
      });
    case dashBoardAction.ActionTypes.LOAD_NOUSERS:
      return Object.assign({}, state, {
        loading: false,
        noUsers: action.payload.noUsers
      });
    default:
      return state;
  }
}

export const getLoading = (state: State) => state.loading;
export const getNoUsers = (state: State) => state.noUsers;

