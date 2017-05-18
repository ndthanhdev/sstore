/**
 * Created by vunguyenhung on 5/18/17.
 */

export class CartDetail {
  shopping_cart_id: number;
  product_variant_id: number;
  quantity: number;

  constructor(that?: CartDetail) {
    if (that) {
      this.shopping_cart_id = that.shopping_cart_id;
      this.product_variant_id = that.product_variant_id;
      this.quantity = that.quantity;
    }
  }
}
