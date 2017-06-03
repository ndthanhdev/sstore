import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {
  PaginatedListOfProducts, PaginatedListOfProductVariants, PaginatedListOfReviews,
  Products
} from "../../models/models";

export const ActionTypes = {

  START_REVIEWS_LOAD: type('[Dashboard] Start Reviews Load'),
  LOAD_REVIEWS: type('[Dashboard] Load Reviews'),

};


export class StartReviewsLoadAction implements Action {
  type = ActionTypes.START_REVIEWS_LOAD;

  constructor(public payload: { page: number }) {
  }
}

export class LoadReviewsAction implements Action {
  type = ActionTypes.LOAD_REVIEWS;

  constructor(public payload: { paginatedListOfReviews: PaginatedListOfReviews }) {
  }
}

export type Actions = StartReviewsLoadAction
  | LoadReviewsAction;
