/**
 * Created by vunguyenhung on 5/12/17.
 */

export class User {
  id?: number;
  full_name: string;
  role?: Role;
  username: string;
  password: string;
  avatar: string;
  email: string;
  dob?: string;
  address?: string;
  tel?: string;
  gender: number;


  constructor(that?: User) {
    if (that) {
      this.id = that.id;
      this.full_name = that.full_name;
      this.role = that.role;
      this.username = that.username;
      this.password = that.password;
      this.avatar = that.avatar;
      this.email = that.email;
      this.gender = that.gender;
      this.dob = that.dob;
      this.address = that.address;
      this.tel = that.tel;
    }
  }
}

export enum Role {
  MEMBER,
  STORE_MANAGER,
  ADMIN
}
