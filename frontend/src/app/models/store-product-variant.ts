import {ProductVariant} from './product-variant.model';
import {Device} from './device.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export class StoreProductVariant {
  id: number;
  price: string;
  in_stock: number;
  product_variant_id: number;
  product_variant: ProductVariant;
  device: Device;
}
