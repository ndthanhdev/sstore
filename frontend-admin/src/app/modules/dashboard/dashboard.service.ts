import {Injectable} from '@angular/core';
import {GenericService} from "../../generic.service";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class DashboardService extends GenericService {


  constructor(http: Http, authHttp: AuthHttp) {
    super(http,authHttp);
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

  public loadMonthSales(): Observable<any[][]> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/MonthSales`
    }));
  }

  public loadReviewPercents(): Observable<number[][]> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/ReviewPercents`
    }));
  }

  public loadRecentUsers(): Observable<number[][]> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/RecentUsers`
    }));
  }

}
