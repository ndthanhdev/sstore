/**
 * Created by vunguyenhung on 5/13/17.
 */


import {Injectable, Injector} from '@angular/core';
import {GenericService} from '../../generic.service';
import {Observable} from 'rxjs/Observable';
import {Category} from '../../models/category.model';
import {RequestOptions} from '@angular/http';
import {Page} from '../../models/page.model';
import {ProductSummary} from '../../models/product.model';
@Injectable()
export class CategoryService extends GenericService {

  constructor(injector: Injector) {
    super(injector);
    this.BASE_URL += '/categories';
  }

  public loadCatalogParentCategories(catalogId: number): Observable<Category[]> {
    return this.get(new RequestOptions({
      url: `http://127.0.0.1/catalogs/${catalogId}/categories`
    }));
  }

  public loadCategory(categoryId: number): Observable<Category> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${categoryId}`
    }));
  }

  public loadProducts(categoryId: number, page: number, storeId: number): Observable<Page<ProductSummary>> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${categoryId}/products?page=${page}&&storeId=${storeId}`
    }));
  }

}
