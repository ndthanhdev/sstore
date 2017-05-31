import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Category} from '../../models/category.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */


export const ActionTypes = {
  START_CATEGORY_LOAD: type('[Category] Start Category Load'),
  LOAD_CATEGORY: type('[Category] Load Category'),

  START_CATALOG_PARENT_CATEGORIES_LOAD: type('[Category] Start Catalog Parent Category Load'),
  LOAD_CATALOG_PARENT_CATEGORIES: type('[Category] Load Catalog Parent Categories')
};


export class StartCatalogParentCategoriesLoadAction implements Action {
  type = ActionTypes.START_CATALOG_PARENT_CATEGORIES_LOAD;

  constructor(public payload: { catalogId: number }) {

  }
}

export class LoadCatalogParentCategoriesAction implements Action {
  type = ActionTypes.LOAD_CATALOG_PARENT_CATEGORIES;

  constructor(public payload: { catalogParentCategories: Category[] }) {
  }
}

export class StartCategoryLoadAction implements Action {
  type = ActionTypes.START_CATEGORY_LOAD;

  constructor(public payload: { categoryId: number }) {
  }
}

export class LoadCategoryAction implements Action {
  type = ActionTypes.LOAD_CATEGORY;

  constructor(public payload: { category: Category }) {

  }
}

export type Actions = StartCatalogParentCategoriesLoadAction
  | LoadCatalogParentCategoriesAction
  | StartCategoryLoadAction
  | LoadCategoryAction;
