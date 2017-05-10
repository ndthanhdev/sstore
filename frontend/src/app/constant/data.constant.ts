import {ProductSummary} from '../models/product.model';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export const PRODUCT_SUMMARY_LIST: ProductSummary[] = [
  {
    id: 1,
    name: 'random name 1',
    img_url: 'http://lorempixel.com/500/500/',
    rating: 5,
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
