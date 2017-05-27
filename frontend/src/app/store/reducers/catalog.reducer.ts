import {Catalog} from '../../models/catalog.model';
import * as catalogActions from '../actions/catalog.action';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export interface State {
  loading: boolean;
  loaded: boolean;
  error: any;
  catalogs: Catalog[];
  selectedCatalog: Catalog;
}


export const initialState: State = {
  loading: false,
  loaded: false,
  error: null,
  catalogs: null,
  selectedCatalog: null
};

export function reducer(state: State = initialState, action: catalogActions.Actions): State {
  switch (action.type) {
    case catalogActions.ActionTypes.START_ALL_CATALOG_LOAD:
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });

    case catalogActions.ActionTypes.LOAD_ALL_CATALOG:
      return Object.assign({}, state, {
        catalogs: action.payload.catalogs,
        loaded: true,
        loading: false
      });

    default:
      return state;
  }

}

export const getCatalogs = (state: State) => state.catalogs;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
