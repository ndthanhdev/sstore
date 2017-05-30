/**
 * Created by vunguyenhung on 5/30/17.
 */

export class MQTTProduct {
  deviceId: number;
  quantity: number;

  constructor(that: MQTTProduct) {
    if (that) {
      this.deviceId = that.deviceId;
      this.quantity = that.quantity;
    }
  }
}
