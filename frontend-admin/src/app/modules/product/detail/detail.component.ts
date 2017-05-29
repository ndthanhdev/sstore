import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ProductService} from "../product.service";
import * as rootReducer from "../../../store/reducers/root";
import {PaginatedListOfProductVariants, Products} from "../../../models/models";
import {Store} from "@ngrx/store";
import {
  StartProductDetailLoadAction, StartProductsLoadAction,
  StartProductVariantsLoadAction
} from "../../../store/actions/product.action";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'frontend-admin-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;

  private sub: Subscription;

  productSub: Subscription;
  product: Products;

  paginatedListOfProductVariantsSub: Subscription;
  paginatedListOfProductVariants: PaginatedListOfProductVariants;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<rootReducer.State>) {
  }

  ngOnInit() {

    this.sub = Observable.combineLatest(this.route.params, this.route.queryParams)
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
    this.sub.unsubscribe();
  }

  pageChanged($event) {
    if (!isNaN($event)
      && this.paginatedListOfProductVariants
      && this.paginatedListOfProductVariants.pageIndex != $event) {
      this.router.navigate(['/product', this.product.id], {queryParams: {page: $event}});
    }
  }
}
