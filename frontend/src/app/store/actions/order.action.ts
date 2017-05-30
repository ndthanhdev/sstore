import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Page} from '../../models/page.model';
import {Order} from '../../models/order.model';
/**
 * Created by vunguyenhung on 5/25/17.
 */

export const ActionTypes = {
  START_ORDERS_LOAD: type('[Order] Start Orders Load'),
  LOAD_ORDERS: type('[Order] Load Orders'),

  START_ORDER_LOAD: type('[Order] Start Order Load'),
  LOAD_ORDER: type('[Order] Load Order'),

  START_ORDER_CREATE: type('[Order] Start Order Create'),
  CREATE_ORDER: type('[Order] Create Order'),

  START_ORDER_DELIVERING_ONSTORE: type('[Order] Start Order Delivering On Store'),
  DELIVERING_ONSTORE_ORDER: type('[Order] Delivering Onstore Order'),

  START_ORDER_DELIVERING_ONLINE: type('[Order] Start Order Delivering Online'),
  DELIVERING_ONLINE_ORDER: type('[Order] Delivering Online Order'),

  START_ORDER_CLOSE: type('[Order] Start Order Close'),
  CLOSE_ORDER: type('[Order] Close Order'),
};

export class StartOrdersLoadAction implements Action {
  type = ActionTypes.START_ORDERS_LOAD;

  constructor(public payload: { page: number }) {
  }
}

export class LoadOrdersAction implements Action {
  type = ActionTypes.LOAD_ORDERS;

  constructor(public payload: { orders: Page<Order> }) {
  }
}

export class StartOrderLoadAction implements Action {
  type = ActionTypes.START_ORDER_LOAD;

  constructor(public payload: { orderId: number }) {
  }
}

export class LoadOrderAction implements Action {
  type = ActionTypes.LOAD_ORDER;

  constructor(public payload: { order: Order }) {
  }
}

export class StartOrderCreateAction implements Action {
  type = ActionTypes.START_ORDER_CREATE;

  constructor(public payload: { cartId: number }) {
  }
}

export class CreateOrderAction implements Action {
  type = ActionTypes.CREATE_ORDER;

  constructor(public payload: { createdOrderId: number }) {
  }
}

export class StartOrderDeliveringOnlineAction implements Action {
  type = ActionTypes.START_ORDER_DELIVERING_ONLINE;

  constructor(public payload: { orderId: number, address: string, latitude: string, longitude: string, tel: string }) {
  }
}

export class DeliveringOnlineOrderAction implements Action {
  type = ActionTypes.DELIVERING_ONLINE_ORDER;
}

export class StartOrderDeliveringOnstoreAction implements Action {
  type = ActionTypes.START_ORDER_DELIVERING_ONSTORE;
}

export class DeliveringOnstoreOrderAction implements Action {
  type = ActionTypes.DELIVERING_ONSTORE_ORDER;
}


export class StartOrderCloseAction implements Action {
  type = ActionTypes.START_ORDER_CLOSE;

  constructor(public payload: { orderId: number }) {
  }
}

export class CloseOrderAction implements Action {
  type = ActionTypes.CLOSE_ORDER;
}

export type Actions = StartOrdersLoadAction
  | LoadOrdersAction
  | StartOrderLoadAction
  | LoadOrderAction
  | StartOrderCreateAction
  | CreateOrderAction
  | StartOrderDeliveringOnlineAction
  | DeliveringOnlineOrderAction
  | StartOrderDeliveringOnstoreAction
  | DeliveringOnstoreOrderAction
  | StartOrderCloseAction
  | CloseOrderAction;
