import * as reviewAction from "../actions/review.action";
import {Action} from "@ngrx/store";
import {
  PaginatedListOfProducts, PaginatedListOfProductVariants, PaginatedListOfReviews,
  Products
} from "../../models/models";

export interface State {
  isBusy: boolean;
  paginatedListOfReviews: PaginatedListOfReviews;
}

export const initialState: State = {
  isBusy: false,
  paginatedListOfReviews: null,
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    // load reviews
    case reviewAction.ActionTypes.START_REVIEWS_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case reviewAction.ActionTypes.LOAD_REVIEWS:
      return Object.assign({}, state, {
        isBusy: false,
        paginatedListOfReviews: action.payload.paginatedListOfReviews
      });



    default:
      return state;
  }
}

export const getIsBusy = (state: State) => state.isBusy;
export const getPaginatedListOfReviews = (state: State) => state.paginatedListOfReviews;
