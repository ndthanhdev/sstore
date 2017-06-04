import { Injectable } from '@angular/core';
import {GenericService} from "../../generic.service";
import {Http, RequestOptions} from "@angular/http";
import {AuthHttp} from "angular2-jwt";
import {Observable} from "rxjs/Observable";
import {PaginatedListOfOrders} from "../../models/models";

@Injectable()
export class OrderService extends GenericService {
  constructor(http: Http, authHttp: AuthHttp) {
    super(http,authHttp);
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

}
