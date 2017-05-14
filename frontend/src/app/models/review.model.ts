import {User} from './user.model';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export class Review {
  id: number;
  content?: string;
  rating?: number;
  user_id?: number;
  product_id?: number;
  created_at?: Date;
  updated_at?: Date;
  user?: User;
}
