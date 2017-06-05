import {Injectable} from '@angular/core';
import {GenericService} from "../../generic.service";
import {Http, RequestOptions, Response} from "@angular/http";
import {AuthHttp} from "angular2-jwt";
import {Observable} from "rxjs/Observable";
import {Orders, PaginatedListOfOrders} from "../../models/models";

@Injectable()
export class OrderService extends GenericService {
  constructor(http: Http, authHttp: AuthHttp) {
    super(http, authHttp);
    this.BASE_URL += '/Orders'
  }

  public loadPaginatedListOfOrders(page: number = 1): Observable<PaginatedListOfOrders> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}`,
      params: {
        'page': page
      }
    }));
  }

  public getOrder(id: number): Observable<PaginatedListOfOrders> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${id}`
    }));
  }

  public updateOrder(order: Orders): Observable<Response> {
    return this.put(new RequestOptions({
      url: `${this.BASE_URL}/${order.id}`
    }), order);
  }

}
