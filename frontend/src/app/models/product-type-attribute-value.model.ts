/**
 * Created by vunguyenhung on 5/14/17.
 */


export class ProductTypeAttributeValue {
  id: number;
  name: string;
  product_type_id: number;
  pivot: {
    product_id: number;
    product_type_attribute_id: number;
    value: string;
  }
}
