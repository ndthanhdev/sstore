/**
 * Created by vunguyenhung on 5/12/17.
 */

export class User {
  id: number;
  username: string;
  avatar: string;

  constructor(that?: User) {
    if (that) {
      this.id = that.id;
      this.avatar = that.avatar;
      this.username = that.username;
    }
  }
}
