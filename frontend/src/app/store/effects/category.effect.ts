/**
 * Created by vunguyenhung on 5/13/17.
 */


import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {CategoryService} from '../../modules/category/category.service';
import {Observable} from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';

import * as categoryActions from '../actions/category.action';
import {of} from 'rxjs/observable/of';

import * as fromRoot from '../../store/reducers';

@Injectable()
export class CategoryEffect {

  constructor(private actions$: Actions,
              private categoryService: CategoryService,
              private store: Store<fromRoot.State>) {
  }

  @Effect()
  catalogParentCategoriesLoad$: Observable<Action> = this.actions$
    .ofType(categoryActions.ActionTypes.START_CATALOG_PARENT_CATEGORIES_LOAD)
    .switchMap(action => this.categoryService.loadCatalogParentCategories(action.payload.catalogId)
      .concatMap(catalogParentCategories =>
        of(new categoryActions.LoadCatalogParentCategoriesAction({catalogParentCategories: catalogParentCategories}))));

  @Effect()
  categoryLoad$: Observable<Action> = this.actions$
    .ofType(categoryActions.ActionTypes.START_CATEGORY_LOAD)
    .switchMap(action => this.categoryService.loadCategory(action.payload.categoryId)
      .concatMap(category =>
        of(new categoryActions.LoadCategoryAction({category: category}))));

  @Effect()
  productsLoad$: Observable<Action> = this.actions$
    .ofType(categoryActions.ActionTypes.START_CATEGORY_PRODUCTS_LOAD)
    .map(action => action.payload)
    .combineLatest(this.store.select(fromRoot.getStoreStore))
    .filter(([payload, currentStore]) => !!currentStore)
    .switchMap(([payload, currentStore]) => this.categoryService.loadProducts(payload.categoryId, payload.page, currentStore.id)
      .concatMap(products =>
        of(new categoryActions.LoadCategoryProductsAction({products: products}))));


}
