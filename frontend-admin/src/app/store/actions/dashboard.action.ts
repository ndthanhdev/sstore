import {type} from "../../util/helper";
import {Action} from "@ngrx/store";

export const ActionTypes = {

  START_LOAD: type('[Dashboard] Start Load'),
  LOAD: type('[Dashboard] Load'),

  START_NO_USERS_LOAD: type('[Dashboard] Start No Users Load'),
  LOAD_NO_USERS: type('[Dashboard] Load No Users'),

  START_NO_REMAINING_ORDERS_LOAD: type('[Dashboard] Start No Remaining Orders Load'),
  LOAD_NO_REMAINING_ORDERS: type('[Dashboard] Load No Remaining Orders'),

  START_NO_BAD_REVIEWS_LOAD: type('[Dashboard] Start No Bad Reviews Load'),
  LOAD_NO_BAD_REVIEWS: type('[Dashboard] Load No Bad Reviews'),

  START_TODAY_SALES_LOAD: type('[Dashboard] Start Today Sales Load'),
  LOAD_TODAY_SALES: type('[Dashboard] Load Today Sales Reviews'),

  START_MONTH_SALES_LOAD: type('[Dashboard] Start Month Sales Load'),
  LOAD_MONTH_SALES: type('[Dashboard] Load Month Sales'),

  START_REVIEW_PERCENTS_LOAD: type('[Dashboard] Start Review Percents Load'),
  LOAD_REVIEW_PERCENTS: type('[Dashboard] Load Review Percents'),

  START_RECENT_USERS_LOAD: type('[Dashboard] Start Recent Users Load'),
  LOAD_RECENT_USERS: type('[Dashboard] Load Recent Users Reviews'),

};


export class StartNoUsersLoadAction implements Action {
  type = ActionTypes.START_NO_USERS_LOAD;
}

export class LoadNoUsersAction implements Action {
  type = ActionTypes.LOAD_NO_USERS;

  constructor(public payload: { noUsers: number }) {
  }
}


export class StartNoRemainingOrdersLoadAction implements Action {
  type = ActionTypes.START_NO_REMAINING_ORDERS_LOAD;
}

export class LoadNoRemainingOrdersAction implements Action {
  type = ActionTypes.LOAD_NO_REMAINING_ORDERS;

  constructor(public payload: { noRemainingOrders: number }) {
  }
}


export class StartNoBadReviewsLoadAction implements Action {
  type = ActionTypes.START_NO_BAD_REVIEWS_LOAD;
}

export class LoadNoBadReviewsAction implements Action {
  type = ActionTypes.LOAD_NO_BAD_REVIEWS;

  constructor(public payload: { noBadReviews: number }) {
  }
}


export class StartMonthSalesLoadAction implements Action {
  type = ActionTypes.START_MONTH_SALES_LOAD;
}

export class LoadMonthSalesAction implements Action {
  type = ActionTypes.LOAD_MONTH_SALES;
  constructor(public payload: { monthSales: any[][] }) {
  }
}


export class StartReviewPercentsLoadAction implements Action {
  type = ActionTypes.START_REVIEW_PERCENTS_LOAD;
}

export class LoadReviewPercentsAction implements Action {
  type = ActionTypes.LOAD_REVIEW_PERCENTS;
  constructor(public payload: { reviewPercents: number[][] }) {
  }
}


export class StartRecentUsersLoadAction implements Action {
  type = ActionTypes.START_RECENT_USERS_LOAD;
}

export class LoadRecentUsersAction implements Action {
  type = ActionTypes.LOAD_RECENT_USERS;
  constructor(public payload: { recentUsers: any[][] }) {
  }
}

