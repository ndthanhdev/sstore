import {Component, OnInit} from '@angular/core';
import {Catalog} from './models/catalog.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {JwtHelper} from 'angular2-jwt';
import {User} from './models/user.model';

import * as fromRoot from './store/reducers';
import * as catalogActions from './store/actions/catalog.action';
import * as authActions from './store/actions/auth.action';
import * as storeActions from './store/actions/store.action';
import * as layoutActions from './store/actions/layout.action';

@Component({
  selector: 'frontend-root',
  template: `
    <frontend-navbar
      [currentStore]="(selectedStore | async)"
      [catalogs]="catalogs | async">
    </frontend-navbar>
    <router-outlet></router-outlet>
    <simple-notifications [options]="notificationOptions"></simple-notifications>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  catalogs: Observable<Catalog[]>;
  selectedStore: Observable<any>;

  coordinates: Observable<Coordinates>;

  private notificationOptions = {
    position: ['bottom', 'right'],
    timeOut: 2000,
    showProgressBar: false,
    preventDuplicates: true
  };

  constructor(private store: Store<fromRoot.State>) {
    this.catalogs = this.store.select(fromRoot.getCatalogCatalogs);
    this.selectedStore = this.store.select(fromRoot.getStoreStore);

    const jwtHelper: JwtHelper = new JwtHelper();
    const jwtToken = localStorage.getItem('id_token');
    if (jwtToken && !jwtHelper.isTokenExpired(jwtToken)) {
      this.store.dispatch(new authActions.LoginAction({
        user: new User(jwtHelper.decodeToken(jwtToken))
      }));
    }
  }

  ngOnInit(): void {
    this.store.dispatch(new catalogActions.StartAlLCatalogLoadAction());
    this.store.dispatch(new storeActions.StartPrimaryStoreLoadAction());
    this.store.dispatch(new layoutActions.StartCoordinatesGetAction());
  }


}
