import {StoreProductVariant} from './store-product-variant';
/**
 * Created by vunguyenhung on 5/18/17.
 */

export class CartDetail {
  id?: number;
  shopping_cart_id?: number;
  quantity: number;
  price: string;
  store_product_variant_id: number;
  store_product_variant?: StoreProductVariant;
}
