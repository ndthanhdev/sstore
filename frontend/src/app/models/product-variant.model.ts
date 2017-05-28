import {ProductVariationValue} from './product-variation-values.model';
import {Store} from './store.model';
import {Product} from './product.model';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export class ProductVariant {
  id: number;
  default: boolean;
  stores: Store[];
  variation_values: ProductVariationValue[];
  product: Product;
}
