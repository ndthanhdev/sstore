import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Catalog} from '../../models/catalog.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */


export const ActionTypes = {
  START_ALL_CATALOG_LOAD: type('[Catalog] Start All Catalog Load'),
  LOAD_ALL_CATALOG: type('[Catalog] Load All Catalog'),
};

export class StartAlLCatalogLoadAction implements Action {
  type = ActionTypes.START_ALL_CATALOG_LOAD;

  constructor(public payload?) {
  }
}

export class LoadAllCatalogAction implements Action {
  type = ActionTypes.LOAD_ALL_CATALOG;

  constructor(public payload: { catalogs: Catalog[] }) {
  }
}

export type Actions = StartAlLCatalogLoadAction | LoadAllCatalogAction;
