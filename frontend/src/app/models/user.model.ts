/**
 * Created by vunguyenhung on 5/12/17.
 */

export class User {
  id: number;
  full_name: string;
  role: Role;
  username: string;
  avatar: string;

  constructor(that?: User) {
    if (that) {
      this.id = that.id;
      this.avatar = that.avatar;
      this.role = that.role;
      this.username = that.username;
      this.full_name = that.full_name;
    }
  }
}

export enum Role {
  MEMBER,
  STORE_MANAGER,
  ADMIN
}
