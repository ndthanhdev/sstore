import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {MQTTProduct} from '../../models/mqtt-product.model';
/**
 * Created by vunguyenhung on 5/30/17.
 */

// show product name, index of the product in cart (progress)
  // returned response: OK

export const ActionTypes = {
    START_PRODUCTS_GET: type('[MQTT] Start Products Get'),
    GET_PRODUCTS: type('[MQTT] Get Products'),
  };

export class StartProductsGetAction implements Action {
  type = ActionTypes.START_PRODUCTS_GET;

  constructor(public payload: { products: MQTTProduct[] }) {
  }
}

export class GetProductsAction implements Action {
  type = ActionTypes.GET_PRODUCTS;
}


export type Actions =
  StartProductsGetAction
  | GetProductsAction;
