import {Injectable} from '@angular/core';
import {GenericService} from "../generic.service";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DashboardService extends GenericService {


  constructor(http: Http) {
    super(http);
  }

  public loadNoUsers(): Observable<number> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/Users/Count`
    }));
  }

  public loadNoRemainingOrders(): Observable<number> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/Orders/Remaining/Count`
    }));
  }

  public loadNoBadReviews(): Observable<number> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/Reviews/Bad/Count`
    }));
  }

}
