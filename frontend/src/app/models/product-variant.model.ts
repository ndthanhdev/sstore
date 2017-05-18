import {ProductVariationValue} from './product-variation-values.model';
import {StoreProductVariant} from './store-product-variant';
import {CartDetail} from './cart-detail.model';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export class ProductVariant {
  id: number;
  default: boolean;
  pivot: StoreProductVariant | CartDetail;
  variation_values: ProductVariationValue[];
}
