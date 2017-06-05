import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {
  CustomAttributes, Orders, PaginatedListOfOrders,
  PaginatedListOfProducts, PaginatedListOfProductVariants, Products, ProductTypeAttributeValues, ProductVariationValues,
  StoreProductVariant
} from "../../models/models";
import {Response} from "@angular/http";

export const ActionTypes = {

  START_ORDERS_LOAD: type('[Order] Start Orders Load'),
  LOAD_ORDERS: type('[Order] Load Orders'),

  START_ORDER_LOAD: type('[Order] Start Order Load'),
  LOAD_ORDER: type('[Order] Load Order'),

  START_ORDER_UPDATE: type('[Order] Start Order Update'),
  UPDATE_ORDER: type('[Order] Update Order'),
};


export class StartOrdersLoadAction implements Action {
  type = ActionTypes.START_ORDERS_LOAD;

  constructor(public payload: { page: number }) {
  }
}

export class LoadOrdersAction implements Action {
  type = ActionTypes.LOAD_ORDERS;

  constructor(public payload: { paginatedListOfOrders: PaginatedListOfOrders }) {
  }
}


export class StartOrderLoadAction implements Action {
  type = ActionTypes.START_ORDER_LOAD;

  constructor(public payload: { id: number }) {
  }
}

export class LoadOrderAction implements Action {
  type = ActionTypes.LOAD_ORDER;

  constructor(public payload: { order: Orders }) {
  }
}

export class StartOrderUpdateAction implements Action {
  type = ActionTypes.START_ORDER_UPDATE;

  constructor(public payload: { order: Orders }) {
  }
}

export class UpdateOrderAction implements Action {
  type = ActionTypes.UPDATE_ORDER;

  constructor(public payload: { order: Orders }) {
  }
}
