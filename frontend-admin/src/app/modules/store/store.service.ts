import { Injectable } from '@angular/core';
import {GenericService} from "../../generic.service";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {PaginatedListOfStores} from "../../models/models";

@Injectable()
export class StoreService extends GenericService{

  constructor(http: Http) {
    super(http);
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

}
