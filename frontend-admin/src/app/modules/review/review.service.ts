import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {GenericService} from "../../generic.service";
import {PaginatedListOfReviews} from "../../models/models";
import {Observable} from "rxjs/Observable";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class ReviewService extends GenericService {

  constructor(http: Http, authHttp: AuthHttp) {
    super(http,authHttp);
    this.BASE_URL += '/Reviews'
  }

  public loadPaginatedListOfReviews(page: number = 1): Observable<PaginatedListOfReviews> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}`,
      params: {
        'page': page
      }
    }));
  }


}
