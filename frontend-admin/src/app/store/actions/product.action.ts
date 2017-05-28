import {type} from "../../util/helper";
import {Action} from "@ngrx/store";
import {PaginatedListOfProducts} from "../../models/models";

export const ActionTypes = {

  START_PRODUCTS_LOAD: type('[Dashboard] Start Products Load'),
  LOAD_PRODUCTS: type('[Dashboard] Load Products'),

};


export class StartProductsLoadAction implements Action {
  type = ActionTypes.START_PRODUCTS_LOAD;
  constructor(public payload: { page: number }) {
  }
}

export class LoadProductsAction implements Action {
  type = ActionTypes.LOAD_PRODUCTS;

  constructor(public payload: { paginatedListOfProducts: PaginatedListOfProducts }) {
  }
}

