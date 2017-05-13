import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Category} from '../../models/category.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */


export const ActionTypes = {
  START_CATALOG_PARENT_CATEGORIES_LOAD: type('[Category] Start Catalog Parent Category Load'),
  LOAD_CATALOG_PARENT_CATEGORIES: type('[Category] Load Cataog Parent Categories')
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

export type Actions = StartCatalogParentCategoriesLoadAction | LoadCatalogParentCategoriesAction;
