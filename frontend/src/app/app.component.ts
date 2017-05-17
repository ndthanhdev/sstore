import {Component, OnInit} from '@angular/core';
import {Catalog} from './models/catalog.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {JwtHelper} from 'angular2-jwt';
import {User} from './models/user.model';

import * as fromRoot from './store/reducers';
import * as catalogActions from './store/actions/catalog.action';
import * as authActions from './store/actions/auth.action';

@Component({
  selector: 'frontend-root',
  template: `
    <frontend-navbar
      [storeName]="storeName"
      [itemInCart]="itemInCart"
      [catalogs]="catalogs | async"
      [cartId]="cartId">
    </frontend-navbar>
    <router-outlet></router-outlet>
    <simple-notifications [options]="notificationOptions"></simple-notifications>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  storeName = 'Ba Thang Hai 1';
  itemInCart = 2;
  cartId = 1;

  catalogs: Observable<Catalog[]>;

  private notificationOptions = {
    position: ['bottom', 'right'],
    timeOut: 2000,
    showProgressBar: false,
    preventDuplicates: true
  };

  constructor(private store: Store<fromRoot.State>) {
    this.catalogs = this.store.select(fromRoot.getCatalogCatalogs);

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
  }


}
