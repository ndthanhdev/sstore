/**
 * Created by vunguyenhung on 5/25/17.
 */

import {Cart} from './cart.model';
export enum OrderState {
  PROCESSING,
  DELIVERING,
  DONE
}


export class Order {
  id: number;
  code: string;
  rating: number;
  comment: string;
  state: OrderState;
  address: string;
  latitude: string;
  longitude: string;
  tel: string;
  created_at: Date;
  updated_at: Date;
  shopping_cart_id: number;
  shopping_cart: Cart;
}
