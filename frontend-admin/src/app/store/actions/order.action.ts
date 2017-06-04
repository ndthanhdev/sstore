import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {
  CustomAttributes, PaginatedListOfOrders,
  PaginatedListOfProducts, PaginatedListOfProductVariants, Products, ProductTypeAttributeValues, ProductVariationValues,
  StoreProductVariant
} from "../../models/models";
import {Response} from "@angular/http";

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

  constructor(public payload: { paginatedListOfOrders: PaginatedListOfOrders }) {
  }
}
