import {Injectable} from '@angular/core';
import {GenericService} from "../../generic.service";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {PaginatedListOfProducts} from "../../models/models";

@Injectable()
export class ProductService extends GenericService {

  constructor(http: Http) {
    super(http);
    this.BASE_URL += '/Products'
  }

  public loadPaginatedListOfProducts(page: number = 1): Observable<PaginatedListOfProducts> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}`,
      params: {
        'page': page
      }
    }));
  }

  public loadProductDetail(id: number): Observable<PaginatedListOfProducts> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${id}`
    }));
  }

}
