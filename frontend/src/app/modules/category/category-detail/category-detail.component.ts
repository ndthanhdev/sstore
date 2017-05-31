import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';

import {Category, CategoryBreadcrumb} from '../../../models/category.model';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {ProductSummary} from '../../../models/product.model';
import {Page} from '../../../models/page.model';

import * as fromRoot from '../../../store/reducers';
import * as categoryActions from '../../../store/actions/category.action';
import * as cartActions from '../../../store/actions/cart.action';
import {ActiveCart} from '../../../models/cart.model';
@Component({
  selector: 'frontend-category-detail',
  template: `
    <div class="jumbotron">
      <div class="container">
        <frontend-category-breadcrumb
          [breadcrumbs]="generateBreadcrumbs()">
        </frontend-category-breadcrumb>
        <frontend-category-tiles
          class="row justify-content-md-between align-items-center my-3"
          [tiles]="category?.child">
        </frontend-category-tiles>
      </div>
    </div>

    <ng-template #spinning>
      <frontend-loading></frontend-loading>
    </ng-template>

    <div class="container" *ngIf="!categoryLoading; else spinning">
      <span class="col-12 display-4">
        Category: {{category?.name}}
      </span>
      <hr>
      <frontend-product-summary-list
        [productPage]="productPage | async"
        [page]="currentPage"
        [productLoading]="productsLoading | async"
        (pageChanged)="onPageChange($event)"
        (putToCartButtonClicked)="onPutToCartButtonClick($event)">
      </frontend-product-summary-list>
    </div>

  `,
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  category: Category;
  categorySub: Subscription;

  categoryLoading: boolean;
  categoryLoadingSub: Subscription;

  productPage: Observable<Page<ProductSummary>>;
  productsLoading: Observable<boolean>;

  activeCart: ActiveCart;
  activeCartSub: Subscription;

  currentPage = 1;

  constructor(private route: ActivatedRoute,
              private store: Store<fromRoot.State>) {
    this.categorySub = this.store.select(fromRoot.getCategoryCategory)
      .subscribe(category => this.category = category);

    this.categoryLoadingSub = this.store.select(fromRoot.getCategoryLoading).subscribe(loading => this.categoryLoading = loading);

    this.productsLoading = this.store.select(fromRoot.getCategoryProductsLoading);

    this.productPage = this.store.select(fromRoot.getCategoryProducts);

    this.activeCartSub = this.store.select(fromRoot.getCartActiveCart).subscribe(activeCart => this.activeCart = activeCart);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new categoryActions.StartCategoryLoadAction({categoryId: params['id']}));
      this.store.dispatch(new categoryActions.StartCategoryProductsLoadAction({categoryId: params['id'], page: 1}));
    });
  }

  generateBreadcrumbs() {
    if (this.category) {
      const lastBreadcrumb = {
        name: this.category.name,
        link: {
          path: '/categories',
          param: this.category.id
        }
      };
      const firstBreadcrumb = {
        name: this.category.catalog.name,
        link: {
          path: '/catalogs',
          param: this.category.catalog.id
        }
      };
      const parents = this.category.parents.map(category => new CategoryBreadcrumb({
        name: category.name,
        link: {
          path: '/categories',
          param: category.id.toString()
        }
      }));
      return [firstBreadcrumb, ...parents, lastBreadcrumb];
    } else {
      return [];
    }
  }

  onPageChange($event) {
    this.currentPage = $event;
    this.store.dispatch(new categoryActions.StartCategoryProductsLoadAction({categoryId: this.category.id, page: $event}));
  }

  onPutToCartButtonClick($event) {
    this.store.dispatch(new cartActions.StartProductAddAction({
      cartDetail: {
        shopping_cart_id: this.activeCart.id,
        price: $event.price,
        quantity: $event.quantity,
        store_product_variant_id: $event.store_product_variant_id
      }
    }));
  }
}
