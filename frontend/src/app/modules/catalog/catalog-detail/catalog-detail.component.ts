import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../models/category.model';
import {Store} from '@ngrx/store';
import 'rxjs/add/observable/combineLatest';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';


import {Observable} from 'rxjs/Observable';
import {Catalog} from '../../../models/catalog.model';
import {Subscription} from 'rxjs/Subscription';

import {ProductSummary} from '../../../models/product.model';
import {Page} from '../../../models/page.model';


import * as fromRoot from '../../../store/reducers';
import * as categoryActions from '../../../store/actions/category.action';
import * as productActions from '../../../store/actions/product.action';
import * as cartActions from '../../../store/actions/cart.action';
import {AuthService} from '../../core/auth.service';

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
      <frontend-product-summary-list
        [productPage]="productPage | async"
        [page]="currentPage"
        [productLoading]="productLoading | async"
        [cartLoading]="cartLoading | async"
        (pageChanged)="onPageChange($event)"
        (putToCartButtonClicked)="onPutToCartButtonClick($event)">
      </frontend-product-summary-list>
    </div>
  `,
  styleUrls: ['./catalog-detail.component.scss']
})
export class CatalogDetailComponent implements OnInit, OnDestroy {

  catalogParentCategories: Observable<Category[]>;
  catalogs: Observable<Catalog[]>;
  productPage: Observable<Page<ProductSummary>>;

  productLoading: Observable<boolean>;

  selectedCatalog: Catalog;
  selectedCatalogSub: Subscription;

  cartLoading: Observable<boolean>;

  currentPage = 1;

  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute,
              private authService: AuthService) {
    this.catalogParentCategories = this.store.select(fromRoot.getCategoryCatalogParentCategories);
    this.catalogs = this.store.select(fromRoot.getCatalogCatalogs);
    this.productPage = this.store.select(fromRoot.getProductCatalogProducts).filter(productPage => !!productPage);
    this.productLoading = this.store.select(fromRoot.getProductLoading);
    this.cartLoading = this.store.select(fromRoot.getCartLoading);
  }

  ngOnInit() {
    this.selectedCatalogSub = Observable
      .combineLatest(this.catalogs, this.route.params)
      .filter(([catalogs, params]) => catalogs != null && params != null)
      .subscribe(([catalogs, params]) => {
        const catalogId = params['id'];
        this.store.dispatch(new categoryActions.StartCatalogParentCategoriesLoadAction({catalogId: catalogId}));
        this.store.dispatch(new productActions.StartCatalogProductsLoadAction({catalogId: catalogId, page: 1}));
        this.selectedCatalog = catalogs.find(catalog => catalog.id === +catalogId);
      });
  }

  ngOnDestroy(): void {
    this.selectedCatalogSub.unsubscribe();
  }

  onPageChange($event) {
    this.currentPage = $event;
    this.store.dispatch(new productActions.StartCatalogProductsLoadAction({catalogId: this.selectedCatalog.id, page: $event}));
  }

  onPutToCartButtonClick($event) {
    this.store.dispatch(new cartActions.StartProductAddAction({
      cartDetail: {
        shopping_cart_id: this.authService.user.activeCart.id,
        quantity: $event.quantity,
        store_product_variant_id: $event.store_product_variant_id
      }
    }));
  }
}
