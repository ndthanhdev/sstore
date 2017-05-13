/**
 * Created by vunguyenhung on 5/13/17.
 */

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {CatalogService} from '../../modules/catalog/catalog.service';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as catalogActions from '../actions/catalog.action';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of'; // NOTICE HERE!

@Injectable()
export class CatalogEffect {


  constructor(private actions$: Actions,
              private catalogService: CatalogService) {
  }

  @Effect()
  allCatalogLoad$: Observable<Action> = this.actions$
    .ofType(catalogActions.ActionTypes.START_ALL_CATALOG_LOAD)
    .switchMap(action => this.catalogService.loadAllCatalog()
      .concatMap(catalogs => of(new catalogActions.LoadAllCatalogAction({catalogs: catalogs}))));

}
