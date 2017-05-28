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
  page: number;
  paginatedListOfProducts: Observable<PaginatedListOfProducts>;
  isBusy: Observable<boolean>;
  now:Date;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<rootReducer.State>) {
    this.now = new Date();
  }

  ngOnInit() {

    this.paginatedListOfProducts = this.store.select(rootReducer.getProductPaginatedListOfProducts);
    this.isBusy = this.store.select(rootReducer.getProductIsBusy);
    this.sub = this.route
      .queryParams
      .filter(params => +params['page'] !== this.page)
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = +params['page'] || 1;
        this.store.dispatch(new productAction.StartProductsLoadAction({page: this.page}));
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  pageChanged($event) {
    this.router.navigate(['/product'], {queryParams: {page: $event}});
  }


}
