import {Injectable} from '@angular/core';
import {GenericService} from "../../generic.service";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {
  PaginatedListOfProducts, PaginatedListOfProductVariants, Products,
  StoreProductVariant
} from "../../models/models";

@Injectable()
export class ProductService extends GenericService {

  readonly ORIGINAL_BASE_URL: string;

  constructor(http: Http) {
    super(http);
    this.ORIGINAL_BASE_URL = this.BASE_URL;
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

  public loadProductDetail(id: number): Observable<Products> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${id}`
    }));
  }

  public loadProductVariants(id: number, page: number): Observable<PaginatedListOfProductVariants> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${id}/ProductVariants`,
      params: {
        'page': page
      }
    }));
  }

  public updateProductVariants(storeProductVariant: StoreProductVariant): Observable<Response> {
    return this.put(new RequestOptions({
      url: `${this.ORIGINAL_BASE_URL}/StoreProductVariants/${storeProductVariant.id}`
    }), storeProductVariant);
  }

}
