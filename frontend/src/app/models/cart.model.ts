import {CartDetail} from './cart-detail.model';
/**
 * Created by vunguyenhung on 5/18/17.
 */


export class Cart {
  id: number;
  active: boolean;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  details: CartDetail[];
}
