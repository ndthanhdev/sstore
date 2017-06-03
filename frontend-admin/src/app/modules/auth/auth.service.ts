import {Injectable} from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {AuthHttp} from "angular2-jwt";
import {GenericService} from "../../generic.service";
import {Observable} from "rxjs/Observable";
import {Accounts} from "../../models/models";

@Injectable()
export class AuthService extends GenericService {

  constructor(http: Http, authHttp: AuthHttp) {
    super(http, authHttp);
    this.BASE_URL += '/Auth'
  }

  public login(username: string, password: string): Observable<string> {
    return this.post(new RequestOptions({
      url: `${this.BASE_URL}/Login`
    }), {
      username: username,
      password: password
    });
  }

  public getAccount(id: number): Observable<Accounts> {
    return this.get(new RequestOptions({
      url: `${this.ORIGINAL_BASE_URL}/Accounts/${id}`
    }));
  }

}
