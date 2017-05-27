import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {OrderService} from '../../modules/order/order.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import * as orderActions from '../../store/actions/order.action';
import {of} from 'rxjs/observable/of';
/**
 * Created by vunguyenhung on 5/25/17.
 */


@Injectable()
export class OrderEffect {


  constructor(private actions$: Actions,
              private orderService: OrderService) {
  }

  @Effect()
  ordersLoad$: Observable<Action> = this.actions$
    .ofType(orderActions.ActionTypes.START_ORDERS_LOAD)
    .switchMap(action => this.orderService.loadOrders(action.payload.page)
      .concatMap(orders => of(new orderActions.LoadOrdersAction({orders: orders}))));

}
