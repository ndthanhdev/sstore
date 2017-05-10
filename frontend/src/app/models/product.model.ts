import {Review} from './review.model';
import {ProductVariant} from './product-variant.model';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export class Product {
  id: number;
  name: string;
  img_url: string;
  reviews: Review[];
}


export class ProductSummary {
  id: number;
  name: string;
  img_url: string;
  rating: number;
  reviews: number;
  defaultVariant: ProductVariant;
}
