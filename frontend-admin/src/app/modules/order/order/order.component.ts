import {Component, OnDestroy, OnInit} from '@angular/core';
import {PaginatedListOfOrders} from "../../../models/models";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as rootReducer from "../../../store/reducers/root";
import * as orderAction from '../../../store/actions/order.action';


@Component({
  selector: 'frontend-admin-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  routeSub: Subscription;

  isBusy: Observable<boolean>;

  paginatedListOfOrders: PaginatedListOfOrders;
  paginatedListOfOrdersSub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<rootReducer.State>) {
  }

  ngOnInit() {
    this.isBusy = this.store.select(rootReducer.getOrderIsBusy);

    this.paginatedListOfOrdersSub = this.store.select(rootReducer.getOrderPaginatedListOfProducts)
      .subscribe(paginatedListOfProducts => {
        this.paginatedListOfOrders = paginatedListOfProducts;
      });

    this.routeSub = this.route
      .queryParams
      .subscribe(params => {
        this.store.dispatch(new orderAction.StartOrdersLoadAction({page: +params['page'] || 1}));
      });

  }

  pageChanged($event) {
    if (!isNaN($event)
      && this.paginatedListOfOrders
      && this.paginatedListOfOrders.pageIndex != $event) {
      this.router.navigate(['/orders'], {queryParams: {page: $event}});
    }
  }

  ngOnDestroy(): void {
    this.paginatedListOfOrdersSub.unsubscribe();
  }

}
