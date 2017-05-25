import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Page} from '../../models/page.model';
import {OrderSummary} from '../../models/order.model';
/**
 * Created by vunguyenhung on 5/25/17.
 */

export const ActionTypes = {
  START_ORDERS_LOAD: type('[Order] Start Orders Load'),
  LOAD_ORDERS: type('[Order] Load Orders'),
};

export class StartOrdersLoadAction implements Action {
  type = ActionTypes.START_ORDERS_LOAD;

  constructor(public payload: { page: number }) {
  }
}

export class LoadOrdersAction implements Action {
  type = ActionTypes.LOAD_ORDERS;

  constructor(public payload: { orders: Page<OrderSummary> }) {
  }
}

export type Actions = StartOrdersLoadAction | LoadOrdersAction;
