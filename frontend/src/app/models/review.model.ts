import {User} from './user.model';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export class Review {
  id: number;
  rating: number;
  user?: User;
  content?: string;
  created_at?: Date;
  updated_at?: Date;
}
