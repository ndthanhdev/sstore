import {ProductVariationValue} from './product-variation-values.model';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export class ProductVariant {
  id: number;
  price: number;
  values: ProductVariationValue[];
}
