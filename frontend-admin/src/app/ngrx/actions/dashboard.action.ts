import {type} from "../../util/helper";
import {Action} from "@ngrx/store";

export const ActionTypes = {

  START_LOAD: type('[Dashboard] Start Load'),
  LOAD: type('[Dashboard] Load'),

  START_NO_USERS_LOAD: type('[Dashboard] Start NoUsers Load'),
  LOAD_NO_USERS: type('[Dashboard] Load NoUsers'),

  START_NO_REMAINING_ORDERS_LOAD: type('[Dashboard] Start No Remaining Orders Load'),
  LOAD_NO_REMAINING_ORDERS: type('[Dashboard] Load No Remaining Orders'),

  START_NO_BAD_REVIEWS_LOAD: type('[Dashboard] Start No Bad Reviews Load'),
  LOAD_NO_BAD_REVIEWS: type('[Dashboard] Load No Bad Reviews'),

};


export class StartNoUsersLoadAction implements Action {
  type = ActionTypes.START_NO_USERS_LOAD;
}

export class LoadNoUsersAction implements Action {
  type = ActionTypes.LOAD_NO_USERS;

  constructor(public payload:{ noUsers:number }) {
  }
}

export class StartNoRemainingOrdersLoadAction implements Action {
  type = ActionTypes.START_NO_REMAINING_ORDERS_LOAD;
}

export class LoadNoRemainingOrdersAction implements Action {
  type = ActionTypes.LOAD_NO_REMAINING_ORDERS;

  constructor(public payload:{ noRemainingOrders:number }) {
  }
}

export class StartNoBadReviewsLoadAction implements Action {
  type = ActionTypes.START_NO_BAD_REVIEWS_LOAD;
}

export class LoadNoBadReviewsAction implements Action {
  type = ActionTypes.LOAD_NO_BAD_REVIEWS;

  constructor(public payload:{ noBadReviews:number }) {
  }
}
