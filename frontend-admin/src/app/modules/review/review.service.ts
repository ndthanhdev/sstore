import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {GenericService} from "../../generic.service";
import {PaginatedListOfReviews} from "../../models/models";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ReviewService extends GenericService {

  constructor(http: Http) {
    super(http);
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
