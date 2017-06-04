import {Injectable} from '@angular/core';
import {GenericService} from "../../generic.service";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {PaginatedListOfStores, Stores} from "../../models/models";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class StoreService extends GenericService {

  constructor(http: Http, authHttp: AuthHttp) {
    super(http, authHttp);
    this.BASE_URL += '/Stores'
  }

  public loadPaginatedListOfStores(page: number = 1): Observable<PaginatedListOfStores> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}`,
      params: {
        'page': page
      }
    }));
  }

  public loadAllStores(): Observable<Stores[]> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/All`
    }));
  }

  public loadStore(id: number): Observable<Stores> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${id}`
    }));
  }

}
