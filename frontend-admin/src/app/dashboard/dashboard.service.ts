import {Injectable} from '@angular/core';
import {GenericService} from "../generic.service";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DashboardService extends GenericService {


  constructor(http: Http) {
    super(http);
  }

  public loadNumberOfUsers(): Observable<number> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/Users/Count`
    }));
  }
}
