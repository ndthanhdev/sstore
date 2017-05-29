import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {OrderService} from '../../modules/order/order.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import {of} from 'rxjs/observable/of';
import {CreateOrderAction} from '../actions/order.action';


import * as orderActions from '../../store/actions/order.action';
import * as layoutActions from '../../store/actions/layout.action';
import {CheckoutProgress} from '../../models/checkout-progress.model';
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

  @Effect()
  orderLoad$: Observable<Action> = this.actions$
    .ofType(orderActions.ActionTypes.START_ORDER_LOAD)
    .switchMap(action => this.orderService.loadOrder(action.payload.orderId)
      .concatMap(order => of(new orderActions.LoadOrderAction({order: order}))));

  @Effect()
  orderCreate$: Observable<Action> = this.actions$
    .ofType(orderActions.ActionTypes.START_ORDER_CREATE)
    .switchMap(action => this.orderService.createOrder(action.payload.cartId)
      .concatMap(response => Observable.from([
        new CreateOrderAction(),
        new layoutActions.SetCheckoutProgressAction({checkoutProgress: CheckoutProgress.DELIVERY_METHOD})
      ])));

}
