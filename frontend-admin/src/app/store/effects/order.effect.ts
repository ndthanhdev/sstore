import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";

import * as orderdActions from "../actions/order.action";
import "rxjs/add/operator/switchMap";
import {of} from "rxjs/observable/of";
import "rxjs/add/operator/concatMap";
import "rxjs/add/observable/from";
import {OrderService} from "../../modules/order/order.service";


@Injectable()
export class OrderEffect {


  constructor(private actions$: Actions,
              private orderService: OrderService) {
  }

  @Effect()
  paginatedListOfProductsLoad$: Observable<Action> = this.actions$
    .ofType(orderdActions.ActionTypes.START_ORDERS_LOAD)
    .switchMap(action => this.orderService.loadPaginatedListOfOrders(action.payload.page)
      .concatMap(paginatedListOfOrders => of(new orderdActions.LoadOrdersAction({paginatedListOfOrders: paginatedListOfOrders}))));

}
