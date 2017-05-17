import {Injectable, Injector} from '@angular/core';
import {RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../models/user.model';
import {GenericService} from '../../generic.service';
import {JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService extends GenericService {

  constructor(injector: Injector) {
    super(injector);
    this.BASE_URL += '/auth';
  }

  public login(username: string, password: string): Observable<User> {
    return this.post(new RequestOptions({url: this.BASE_URL + '/login'}), {
      'username': username,
      'password': password
    }).map(this.extractToken)
      .do(token => localStorage.setItem('id_token', token))
      .map(this.extractUser);
  }

  public register(user: User): Observable<string> {
    return this.post(new RequestOptions({url: this.BASE_URL + '/register'}), {
      // username: user.username,
      // password: user.password,
      // email: user.email,
      // dob: user.dob,
      // full_name: user.full_name,
      // address: user.address,
      // avatar: user.avatar
    }).map(resp => resp.json().msg || 'Register Successfully!');
  }

  private extractToken(response: Response) {
    return response.json().data.token;
  }

  private extractUser(token: string): User {
    const jwtHelper = new JwtHelper();
    const rawUser = jwtHelper.decodeToken(token);
    return new User(rawUser);
  }

}
