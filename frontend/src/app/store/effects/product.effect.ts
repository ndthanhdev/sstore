/**
 * Created by vunguyenhung on 5/13/17.
 */


import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {ProductService} from '../../modules/product/product.service';
import {Observable} from 'rxjs/Observable';


import * as productActions from '../../store/actions/product.action';
import {Action} from '@ngrx/store';
import {of} from 'rxjs/observable/of';


@Injectable()
export class ProductEffect {
  constructor(private actions$: Actions,
              private productService: ProductService) {
  }

  @Effect()
  catalogProductsLoad$: Observable<Action> = this.actions$
    .ofType(productActions.ActionTypes.START_CATALOG_PRODUCTS_LOAD)
    .switchMap(action => this.productService.loadCatalogProducts(action.payload.catalogId, action.payload.page)
      .concatMap(catalogProducts => of(new productActions.LoadCatalogProductsAction({catalogProducts: catalogProducts}))));

}
