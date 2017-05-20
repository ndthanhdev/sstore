import {ProductVariationValue} from './product-variation-values.model';
import {StoreProductVariant} from './store-product-variant';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export class ProductVariant {
  id: number;
  default: boolean;
  pivot: StoreProductVariant;
  variation_values: ProductVariationValue[];
}
