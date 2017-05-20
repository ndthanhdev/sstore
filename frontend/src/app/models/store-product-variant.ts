import {Product} from './product.model';
import {ProductVariant} from './product-variant.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */


export class StoreProductVariant {
  id: number;
  price: string;
  in_stock: number;
  store_id: number;
  product_id: number;
  product_variant_id: number;
  product: Product;
  product_variant: ProductVariant;

}
