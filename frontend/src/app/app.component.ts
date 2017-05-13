import {Component, OnInit} from '@angular/core';
import {Catalog} from './models/catalog.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';


import * as fromRoot from './store/reducers';
import * as catalogActions from './store/actions/catalog.action';

@Component({
  selector: 'frontend-root',
  template: `
    <frontend-navbar
      [storeName]="storeName"
      [itemInCart]="itemInCart"
      [catalogs]="catalogs | async">
    </frontend-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  storeName = 'Ba Thang Hai 1';
  itemInCart = 2;

  catalogs: Observable<Catalog[]>;

  // catalogs: Catalog[] = [
  //   {
  //     id: 1,
  //     name: 'Missouri',
  //     description: 'Explicabo beatae dolor incidunt perspiciatis fugit possimus.'
  //   },
  //   {
  //     id: 2,
  //     name: 'Ohio',
  //     description: 'Explicabo odio aspernatur sint dolorem.'
  //   },
  //
  // ];

  constructor(private store: Store<fromRoot.State>) {
    this.catalogs = this.store.select(fromRoot.getCatalogCatalogs);
  }

  ngOnInit(): void {
    this.store.dispatch(new catalogActions.StartAlLCatalogLoadAction());
  }


}
