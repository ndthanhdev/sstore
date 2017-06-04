import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";

import * as reviewActions from "../actions/review.action";
import "rxjs/add/operator/switchMap";
import {of} from "rxjs/observable/of";
import "rxjs/add/operator/concatMap";
import "rxjs/add/observable/from";
import {ReviewService} from "../../modules/review/review.service";


@Injectable()
export class ReviewEffect {


  constructor(private actions$: Actions,
              private reviewService: ReviewService) {
  }

  @Effect()
  paginatedListOfProductsLoad$: Observable<Action> = this.actions$
    .ofType(reviewActions.ActionTypes.START_REVIEWS_LOAD)
    .switchMap(action => this.reviewService.loadPaginatedListOfReviews(action.payload.page)
      .concatMap(paginatedListOfReviews => of(new reviewActions.LoadReviewsAction({paginatedListOfReviews: paginatedListOfReviews}))));

  @Effect()
  reviewStatisticLoad$: Observable<Action> = this.actions$
    .ofType(reviewActions.ActionTypes.START_REVIEW_STATISTIC_LOAD)
    .switchMap(action => this.reviewService.loadReviewStatistic()
      .concatMap(reviewStatistic => of(new reviewActions.LoadReviewStatisticAction({reviewStatistic: reviewStatistic}))));


}
