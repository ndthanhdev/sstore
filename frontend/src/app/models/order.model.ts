/**
 * Created by vunguyenhung on 5/25/17.
 */

export enum OrderState {
  PROCESSING,
  DELIVERING,
  DONE
}


export class OrderSummary {
  id: number;
  code: string;
  rating: number;
  comment: string;
  state: OrderState;
  created_at: Date;
  updated_at: Date;
  shopping_cart_id: Date;
}
