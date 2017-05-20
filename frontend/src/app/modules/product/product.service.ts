/**
 * Created by vunguyenhung on 5/13/17.
 */

import {Injectable, Injector} from '@angular/core';
import {GenericService} from '../../generic.service';
import {RequestOptions} from '@angular/http';
import {Product, ProductSummary} from '../../models/product.model';
import {Page} from '../../models/page.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService extends GenericService {

  constructor(injector: Injector) {
    super(injector);
    this.BASE_URL += '/products';
  }

  public loadCatalogProducts(catalogId: number, page: number, storeId: number): Observable<Page<ProductSummary>> {
    return this.get(new RequestOptions({
      url: `http://127.0.0.1/catalogs/${catalogId}/products?page=${page}&&storeId=${storeId}`,
    }));
  }


  public loadProduct(productId: number, storeId: number): Observable<Product> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${productId}?storeId=${storeId}`,
    }));
  }
}
