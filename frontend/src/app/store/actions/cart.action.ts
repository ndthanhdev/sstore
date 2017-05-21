import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Cart} from '../../models/cart.model';
import {CartDetail} from '../../models/cart-detail.model';
/**
 * Created by vunguyenhung on 5/20/17.
 */

export const ActionTypes = {
  START_CART_LOAD: type('[Cart] Start Cart Load'),
  LOAD_CART: type('[Cart] Load Cart'),

  START_PRODUCT_ADD: type('[Cart] Start Product Add'),
  ADD_PRODUCT: type('[Cart] Add Product')
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
export class StartProductAddAction implements Action {
  type = ActionTypes.START_PRODUCT_ADD;

  constructor(public payload: { cartDetail: CartDetail }) {
  }
}

export class AddProductAction implements Action {
  type = ActionTypes.ADD_PRODUCT;

  constructor(public payload: { cartDetail: CartDetail }) {
  }
}

export type Actions =
  StartCartLoadAction
  | LoadCartAction
  | StartProductAddAction
  | AddProductAction;
