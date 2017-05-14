import {Review} from './review.model';
import {ProductVariant} from './product-variant.model';
import {ProductType} from './product-type.model';
import {ProductTypeAttributeValue} from './product-type-attribute-value.model';
import {CustomAttributeValue} from './custom-attribute-value';
/**
 * Created by vunguyenhung on 5/11/17.
 */

export class Product {
  id: number;
  name: string;
  barcode: string;
  description: string;
  img_url: string;
  created_at: Date;
  updated_at: Date;
  category_id: number;
  product_type_id: number;
  variants: ProductVariant[];
  reviews: Review[];
  product_type: ProductType;
  product_type_attribute_values: ProductTypeAttributeValue[];
  custom_attribute_values: CustomAttributeValue[];

}

export class ProductSummary {
  id: number;
  name: string;
  barcode: string;
  description: string;
  img_url: string;
  created_at: Date;
  updated_at: Date;
  category_id: number;
  product_type_id: number;
  reviews_1_rating_count: number;
  reviews_2_rating_count: number;
  reviews_3_rating_count: number;
  reviews_4_rating_count: number;
  reviews_5_rating_count: number;
  default_variant: ProductVariant[];
}
