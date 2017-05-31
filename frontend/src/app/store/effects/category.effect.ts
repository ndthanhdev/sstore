/**
 * Created by vunguyenhung on 5/13/17.
 */


import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {CategoryService} from '../../modules/category/category.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import * as categoryActions from '../actions/category.action';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CategoryEffect {

  constructor(private actions$: Actions,
              private categoryService: CategoryService) {
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


}
