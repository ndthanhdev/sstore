/**
 * Created by vunguyenhung on 5/13/17.
 */


import 'rxjs/add/operator/combineLatest';

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {ProductService} from '../../modules/product/product.service';
import {Observable} from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';
import {of} from 'rxjs/observable/of';


import * as fromRoot from '../../store/reducers';
import * as productActions from '../../store/actions/product.action';

@Injectable()
export class ProductEffect {
  constructor(private actions$: Actions,
              private productService: ProductService,
              private store: Store<fromRoot.State>) {
  }

  @Effect()
  catalogProductsLoad$: Observable<Action> = this.actions$
    .ofType(productActions.ActionTypes.START_CATALOG_PRODUCTS_LOAD)
    .map(action => action.payload)
    .combineLatest(this.store.select(fromRoot.getStoreStore))
    .filter(([payload, currentStore]) => !!currentStore)
    .switchMap(([payload, currentStore]) => this.productService.loadCatalogProducts(payload.catalogId, payload.page, currentStore.id)
      .concatMap(catalogProducts => of(new productActions.LoadCatalogProductsAction({catalogProducts: catalogProducts}))));

  @Effect()
  productLoad$: Observable<Action> = this.actions$
    .ofType(productActions.ActionTypes.START_PRODUCT_LOAD)
    .map(action => action.payload)
    .combineLatest(this.store.select(fromRoot.getStoreStore))
    .filter(([payload, currentStore]) => !!currentStore)
    .switchMap(([payload, currentStore]) => this.productService.loadProduct(payload.productId, currentStore.id)
      .concatMap(product => of(new productActions.LoadProductAction({product: product}))));
}
