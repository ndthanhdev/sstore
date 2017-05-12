import {ProductSummary} from '../models/product.model';
import {Review} from '../models/review.model';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export const PRODUCT_SUMMARY_LIST: ProductSummary[] = [
  {
    id: 1,
    name: 'random name 1',
    img_url: 'http://lorempixel.com/500/500/',
    rating: 2,
    reviews: 3,
    defaultVariant: {
      id: 1,
      price: 200000,
      values: [
        {
          name: 'size',
          value: 'xl'
        },
        {
          name: 'color',
          value: 'red'
        },
      ]
    }
  }
];

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
