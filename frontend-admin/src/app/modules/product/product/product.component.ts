import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import 'rxjs/add/operator/filter';
import {Store} from "@ngrx/store";
import * as rootReducer from "../../../store/reducers/root";
import {Observable} from "rxjs/Observable";
import {PaginatedListOfProducts} from "../../../models/models";
import * as productAction from '../../../store/actions/product.action';

@Component({
  selector: 'frontend-admin-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  sub: Subscription;
  isBusy: Observable<boolean>;
  now: Date;

  paginatedListOfProductsSub: Subscription;
  paginatedListOfProducts: PaginatedListOfProducts;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<rootReducer.State>) {
    this.now = new Date();
  }

  ngOnInit() {

    this.isBusy = this.store.select(rootReducer.getProductIsBusy);

    this.paginatedListOfProductsSub = this.store.select(rootReducer.getProductPaginatedListOfProducts)
      .subscribe(paginatedListOfProducts => {
        this.paginatedListOfProducts = paginatedListOfProducts;
      });

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // if (!params['page'])
        //   this.router.navigate(['/product'], {queryParams: {page: 1}});
        // else
        //   this.store.dispatch(new productAction.StartProductsLoadAction({page: +params['page']}));
        this.store.dispatch(new productAction.StartProductsLoadAction({page: +params['page'] || 1}));
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.paginatedListOfProductsSub.unsubscribe();
  }

  pageChanged($event) {
    if (!isNaN($event)
      && this.paginatedListOfProducts
      && this.paginatedListOfProducts.pageIndex != $event) {
      this.router.navigate(['/product'], {queryParams: {page: $event}});
    }
  }


}
