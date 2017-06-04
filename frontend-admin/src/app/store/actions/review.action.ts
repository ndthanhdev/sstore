import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {
  PaginatedListOfProducts, PaginatedListOfProductVariants, PaginatedListOfReviews,
  Products
} from "../../models/models";

export const ActionTypes = {

  START_REVIEWS_LOAD: type('[Dashboard] Start Reviews Load'),
  LOAD_REVIEWS: type('[Dashboard] Load Reviews'),

  START_REVIEW_STATISTIC_LOAD: type('[Dashboard] Start Review Statistic Load'),
  LOAD_REVIEW_STATISTIC: type('[Dashboard] Load Review Statistic'),


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


export class StartReviewStatisticLoadAction implements Action {
  type = ActionTypes.START_REVIEW_STATISTIC_LOAD;
}

export class LoadReviewStatisticAction implements Action {
  type = ActionTypes.LOAD_REVIEW_STATISTIC;

  constructor(public payload: { reviewStatistic: any[][] }) {
  }
}

export type Actions = StartReviewsLoadAction
  | LoadReviewsAction;
