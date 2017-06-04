import {Injectable, Injector} from '@angular/core';
import {RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../models/user.model';
import {GenericService} from '../../generic.service';
import {JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/do';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../store/reducers';

@Injectable()
export class AuthService extends GenericService {

  public user: User;

  constructor(injector: Injector, private store: Store<fromRoot.State>) {
    super(injector);
    this.BASE_URL += '/auth';
    this.store.select(fromRoot.getAuthUser).subscribe(user => this.user = user);
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
      full_name: user.full_name,
      dob: user.dob,
      tel: user.tel,
      address: user.address,
      email: user.email,
      avatar: user.avatar,
      gender: user.gender,
      username: user.username,
      password: user.password
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
