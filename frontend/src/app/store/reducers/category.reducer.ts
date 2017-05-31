import {Category} from '../../models/category.model';
import * as categoryActions from '../actions/category.action';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export interface State {
  loading: boolean;
  loaded: boolean;
  error: any;
  catalogParentCategories: Category[];
  category: Category;
}


export const initialState: State = {
  loading: false,
  loaded: false,
  error: null,
  catalogParentCategories: null,
  category: null
};

export function reducer(state: State = initialState, action): State {
  switch (action.type) {

    case categoryActions.ActionTypes.START_CATEGORY_LOAD:
    case categoryActions.ActionTypes.START_CATALOG_PARENT_CATEGORIES_LOAD:
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });

    case categoryActions.ActionTypes.LOAD_CATEGORY:
      return Object.assign({}, state, {
        category: action.payload.category,
        loaded: true,
        loading: false
      });

    case categoryActions.ActionTypes.LOAD_CATALOG_PARENT_CATEGORIES:
      return Object.assign({}, state, {
        catalogParentCategories: action.payload.catalogParentCategories,
        loaded: true,
        loading: false
      });

    default:
      return state;
  }
}

export const getCatalogParentCategories = (state: State) => state.catalogParentCategories;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getCategory = (state: State) => state.category;

