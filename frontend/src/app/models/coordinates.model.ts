/**
 * Created by vunguyenhung on 5/18/17.
 */


export class Coordinates {
  latitude: string;
  longitude: string;
  accuracy: number;

  constructor(that?: Coordinates) {
    if (that) {
      this.latitude = that.latitude;
      this.longitude = that.longitude;
      this.accuracy = that.accuracy;
    }
  }
}
