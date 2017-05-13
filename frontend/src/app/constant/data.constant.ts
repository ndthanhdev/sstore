import {Review} from '../models/review.model';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export const REVIEWS: Review[] = [
  {
    id: 1,
    rating: 3,
    user: {
      id: 1,
      full_name: 'Vu Nguyen Hung'
    },
    content: 'This product is great!',
    created_at: new Date()
  }
];
