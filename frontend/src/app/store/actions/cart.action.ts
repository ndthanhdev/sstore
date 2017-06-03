import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {ActiveCart, Cart} from '../../models/cart.model';
import {CartDetail} from '../../models/cart-detail.model';
/**
 * Created by vunguyenhung on 5/20/17.
 */

export const ActionTypes = {
  START_CART_LOAD: type('[Cart] Start Cart Load'),
  LOAD_CART: type('[Cart] Load Cart'),

  START_LOCAL_CART_LOAD: type('[Cart] Start Local Cart Load'),
  LOAD_LOCAL_CART: type('[Cart] Load Local Cart'),

  START_CART_MERGE: type('[Cart] Start Cart Merge'),
  MERGE_CART: type('[Cart] Merge Cart'),

  START_ACTIVE_CART_LOAD: type('[Cart] Start Active Cart Load'),
  LOAD_ACTIVE_CART: type('[Cart] Load Active Cart'),

  START_LOCAL_ACTIVE_CART_LOAD: type('[Cart] Start Local Active Cart Load'),
  LOAD_LOCAL_ACTIVE_CART: type('[Cart] Load Local Active Cart'),

  START_PRODUCT_ADD: type('[Cart] Start Product Add'),
  ADD_PRODUCT: type('[Cart] Add Product'),

  START_LOCAL_PRODUCT_ADD: type('[Cart] Start Local Product Add'),
  ADD_LOCAL_PRODUCT: type('[Cart] Add Local Product'),

  START_PRODUCT_DELETE: type('[Cart] Start Product Delete'),
  DELETE_PRODUCT: type('[Cart] Delete Product'),

  START_LOCAL_PRODUCT_DELETE: type('[Cart] Start Local Product Delete'),
  DELETE_LOCAL_PRODUCT: type('[Cart] Delete Local Product'),

  START_CART_CLOSE: type('[Cart] Start Cart Close'),
  CLOSE_CART: type('[Cart] Close Cart'),

  START_CART_CREATE: type('[Cart] Start Cart Create'),
  CREATE_CART: type('[Cart] Create Cart'),

  START_CART_DETAIL_QUANTITY_EDIT: type('[Cart] Start Cart Detail Quantity Edit'),
  EDIT_CART_DETAIL_QUANTITY: type('[Cart] Edit Cart Detail Entity')
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

export class StartLocalCartLoadAction implements Action {
  type = ActionTypes.START_LOCAL_CART_LOAD;
}

export class LoadLocalCartAction implements Action {
  type = ActionTypes.LOAD_LOCAL_CART;

  constructor(public payload: { cart: Cart }) {
  }
}

export class StartActiveCartLoadAction implements Action {
  type = ActionTypes.START_ACTIVE_CART_LOAD;
}

export class LoadActiveCartAction implements Action {
  type = ActionTypes.LOAD_ACTIVE_CART;

  constructor(public payload: { activeCart: ActiveCart }) {
  }
}

export class StartLocalActiveCartLoadAction implements Action {
  type = ActionTypes.START_LOCAL_ACTIVE_CART_LOAD;
}

export class LoadLocalActiveCartAction implements Action {
  type = ActionTypes.LOAD_LOCAL_ACTIVE_CART;

  constructor(public payload: { activeCart: ActiveCart }) {
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

export class StartCartMergeAction implements Action {
  type = ActionTypes.START_CART_MERGE;

  constructor(public payload: { cartDetails: CartDetail[] }) {
  }
}

export class MergeCartAction implements Action {
  type = ActionTypes.MERGE_CART;

  constructor(public payload: { cartDetails: CartDetail[] }) {
  }
}

export class StartLocalProductAddAction implements Action {
  type = ActionTypes.START_LOCAL_PRODUCT_ADD;

  constructor(public payload: { cartDetail: CartDetail }) {
  }
}

export class AddLocalProductAction implements Action {
  type = ActionTypes.ADD_LOCAL_PRODUCT;

  constructor(public payload: { cartDetail: CartDetail }) {
  }
}

export class StartProductDeleteAction implements Action {
  type = ActionTypes.START_PRODUCT_DELETE;

  constructor(public payload: { cartId: number, cartDetailId: number, quantity: number }) {
  }
}

export class DeleteProductAction implements Action {
  type = ActionTypes.DELETE_PRODUCT;

  constructor(public payload: { cartDetailId: number, quantity: number }) {
  }
}

export class StartLocalProductDeleteAction implements Action {
  type = ActionTypes.START_LOCAL_PRODUCT_DELETE;

  constructor(public payload: { cartDetailId: number, quantity: number }) {
  }
}

export class DeleteLocalProductAction implements Action {
  type = ActionTypes.DELETE_LOCAL_PRODUCT;

  constructor(public payload: { cartDetailId: number, quantity: number }) {
  }
}

export class StartCartCloseAction implements Action {
  type = ActionTypes.START_CART_CLOSE;
}

export class CloseCartAction implements Action {
  type = ActionTypes.CLOSE_CART;
}

export class StartCartCreateAction implements Action {
  type = ActionTypes.START_CART_CREATE;
}

export class CreateCartAction implements Action {
  type = ActionTypes.CREATE_CART;

  constructor(public payload: { createdCartId: number }) {
  }
}

export class StartCartDetailQuantityEditAction implements Action {
  type = ActionTypes.START_CART_DETAIL_QUANTITY_EDIT;

  constructor(public payload: { cartId: number, cartDetailId: number, quantity: number, quantityOffset: number }) {
  }
}

export class EditCartDetailQuantityAction implements Action {
  type = ActionTypes.EDIT_CART_DETAIL_QUANTITY;

  constructor(public payload: { cartDetailId: number, quantity: number, quantityOffset: number }) {
  }
}

export type Actions =
  StartCartLoadAction
  | LoadCartAction
  | StartActiveCartLoadAction
  | LoadActiveCartAction
  | StartProductAddAction
  | AddProductAction
  | StartProductDeleteAction
  | DeleteProductAction
  | StartCartCloseAction
  | CloseCartAction
  | StartCartCreateAction
  | CreateCartAction
  | StartCartDetailQuantityEditAction
  | EditCartDetailQuantityAction
  | StartLocalProductAddAction
  | AddLocalProductAction
  | StartLocalActiveCartLoadAction
  | LoadLocalActiveCartAction
  | StartLocalCartLoadAction
  | LoadLocalCartAction
  | StartCartMergeAction
  | MergeCartAction
  | StartLocalProductDeleteAction
  | DeleteLocalProductAction;
