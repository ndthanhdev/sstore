import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../models/category.model';
import {Store} from '@ngrx/store';
import 'rxjs/add/observable/combineLatest';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';


import {Observable} from 'rxjs/Observable';

import * as fromRoot from '../../../store/reducers';
import * as categoryActions from '../../../store/actions/category.action';
import {Catalog} from '../../../models/catalog.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'frontend-catalog-detail',
  template: `
    <div class="jumbotron">
      <div class="container">
        <frontend-category-tiles
          class="row justify-content-md-between align-items-center my-3"
          [tiles]="catalogParentCategories | async">
        </frontend-category-tiles>
      </div>
    </div>
    <div class="container">
      <span class="col-12 display-4">
        Catalog: {{selectedCatalog?.name}}
      </span>
      <hr>
      <frontend-product-summary-list>
      </frontend-product-summary-list>
    </div>
  `,
  styleUrls: ['./catalog-detail.component.scss']
})
export class CatalogDetailComponent implements OnInit, OnDestroy {

  catalogParentCategories: Observable<Category[]>;
  catalogs: Observable<Catalog[]>;
  selectedCatalog: Catalog;
  selectedCatalogSub: Subscription;

  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute) {
    this.catalogParentCategories = this.store.select(fromRoot.getCategoryCatalogParentCategories);
    this.catalogs = this.store.select(fromRoot.getCatalogCatalogs);
  }

  ngOnInit() {
    this.selectedCatalogSub = Observable
      .combineLatest(this.catalogs, this.route.params)
      .filter(([catalogs, params]) => catalogs != null && params != null)
      .subscribe(([catalogs, params]) => {
        const catalogId = params['id'];
        this.store.dispatch(new categoryActions.StartCatalogParentCategoriesLoadAction({catalogId: catalogId}));
        this.selectedCatalog = catalogs.find(catalog => catalog.id === +catalogId);
      });
  }

  ngOnDestroy(): void {
    this.selectedCatalogSub.unsubscribe();
  }
}
