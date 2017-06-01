import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ProductService} from "../product.service";
import * as rootReducer from "../../../store/reducers/root";
import {PaginatedListOfProductVariants, Products, StoreProductVariant} from "../../../models/models";
import {Store} from "@ngrx/store";
import {
  StartProductDetailLoadAction, StartProductsLoadAction,
  StartProductVariantsLoadAction, StartStoreProductVariantsUpdateAction
} from "../../../store/actions/product.action";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'frontend-admin-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  id: number;

  private routeSub: Subscription;

  isBusy: Observable<boolean>;

  productSub: Subscription;
  product: Products;

  paginatedListOfProductVariantsSub: Subscription;
  paginatedListOfProductVariants: PaginatedListOfProductVariants;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<rootReducer.State>) {
  }

  ngOnInit() {
    this.isBusy = this.store.select(rootReducer.getProductIsBusy);

    this.routeSub = Observable.combineLatest(this.route.params, this.route.queryParams)
      .filter(([route, query]) => route['id'])
      .subscribe(([route, query]) => {
        this.id = +route['id']; // (+) converts string 'id' to a number
        this.store.dispatch(new StartProductDetailLoadAction({id: this.id}));
        this.store.dispatch(new StartProductVariantsLoadAction({id: this.id, page: +query['page'] || 1}));
      });

    this.productSub = this.store.select(rootReducer.getProductProduct).subscribe(product => {
      this.product = product;
    });

    this.paginatedListOfProductVariantsSub = this.store.select(rootReducer.getProductPaginatedListOfProductVariants)
      .subscribe(paginatedListOfProductVariants => {
        this.paginatedListOfProductVariants = paginatedListOfProductVariants;
      });
  }

  ngOnDestroy() {
    this.productSub.unsubscribe();
    this.paginatedListOfProductVariantsSub.unsubscribe();
    this.routeSub.unsubscribe();
  }

  pageChanged($event) {
    if (!isNaN($event)
      && this.paginatedListOfProductVariants
      && this.paginatedListOfProductVariants.pageIndex != $event) {
      this.router.navigate(['/products', this.product.id], {queryParams: {page: $event}});
    }
  }

  onStoreProductVariantSave($event: StoreProductVariant) {
    this.store.dispatch(new StartStoreProductVariantsUpdateAction({storeProductVariant: $event}));
  }


}
