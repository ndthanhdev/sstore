import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Category} from '../../models/category.model';
import {ProductSummary} from '../../models/product.model';
import {Page} from '../../models/page.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */


export const ActionTypes = {
  START_CATEGORY_LOAD: type('[Category] Start Category Load'),
  LOAD_CATEGORY: type('[Category] Load Category'),

  START_CATALOG_PARENT_CATEGORIES_LOAD: type('[Category] Start Catalog Parent Category Load'),
  LOAD_CATALOG_PARENT_CATEGORIES: type('[Category] Load Catalog Parent Categories'),

  START_CATEGORY_PRODUCTS_LOAD: type('[Category] Start Category Products Load'),
  LOAD_CATEGORY_PRODUCTS: type('[Category] Load Category Products'),
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

export class StartCategoryProductsLoadAction implements Action {
  type = ActionTypes.START_CATEGORY_PRODUCTS_LOAD;

  constructor(public payload: { categoryId: number, page: number }) {
  }
}

export class LoadCategoryProductsAction implements Action {
  type = ActionTypes.LOAD_CATEGORY_PRODUCTS;

  constructor(public payload: { products: Page<ProductSummary> }) {
  }
}

export type Actions = StartCatalogParentCategoriesLoadAction
  | LoadCatalogParentCategoriesAction
  | StartCategoryLoadAction
  | LoadCategoryAction
  | StartCategoryProductsLoadAction
  | LoadCategoryProductsAction;
