import {Injectable} from '@angular/core';
import {GenericService} from "../generic.service";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DashboardService extends GenericService {


  constructor(http: Http) {
    super(http);
    this.BASE_URL+='/Dashboard'
  }

  public loadNoUsers(): Observable<number> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/NoUsers`
    }));
  }

  public loadNoRemainingOrders(): Observable<number> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/NoReaminingOrders`
    }));
  }

  public loadNoBadReviews(): Observable<number> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/NoBadReviews`
    }));
  }

  public loadReviewPercents(): Observable<number[][]> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/ReviewPercents`
    }));
  }

}
