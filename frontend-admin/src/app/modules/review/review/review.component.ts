import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {PaginatedListOfReviews} from "../../../models/models";
import * as rootReducer from "../../../store/reducers/root";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as reviewAction from '../../../store/actions/review.action';

@Component({
  selector: 'frontend-admin-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit, OnDestroy {

  sub: Subscription;
  isBusy: Observable<boolean>;

  paginatedListOfReviewsSub: Subscription;
  paginatedListOfReviews: PaginatedListOfReviews;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<rootReducer.State>) {
  }

  ngOnInit() {
    this.isBusy = this.store.select(rootReducer.getReviewIsBusy);
    this.paginatedListOfReviewsSub = this.store.select(rootReducer.getReviewReviews)
      .subscribe(paginatedListOfReviews => {
        this.paginatedListOfReviews = paginatedListOfReviews;
      });

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.store.dispatch(new reviewAction.StartReviewsLoadAction({page: +params['page'] || 1}));
      });
  }

  ngOnDestroy(): void {
    this.paginatedListOfReviewsSub.unsubscribe();
    this.sub.unsubscribe();
  }

  pageChanged($event) {
    if (!isNaN($event)
      && this.paginatedListOfReviews
      && this.paginatedListOfReviews.pageIndex != $event) {
      this.router.navigate(['/reviews'], {queryParams: {page: $event}});
    }
  }

}
