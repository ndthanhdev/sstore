import {ProductVariant} from './product-variant.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */


export class StoreProductVariant {
  id: number;
  price: string;
  in_stock: number;
  product_variant_id: number;
  product_variant: ProductVariant;
}
