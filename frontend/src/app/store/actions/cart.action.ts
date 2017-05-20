import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Cart} from '../../models/cart.model';
/**
 * Created by vunguyenhung on 5/20/17.
 */

export const ActionTypes = {
  START_CART_LOAD: type('[Cart] Start Cart Load'),
  LOAD_CART: type('[Cart] Load Cart'),
};

export class StartCartLoadAction implements Action {
  type = ActionTypes.START_CART_LOAD;

  constructor(public payload: { cartId: number }) {
  }
}

export class LoadCartAction implements Action {
  type = ActionTypes.LOAD_CART;

  constructor(public payload: { cart: Cart }) {
  }
}

export type Actions = StartCartLoadAction | LoadCartAction;
