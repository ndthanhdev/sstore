import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Review} from '../../../models/review.model';
import {REVIEWS} from '../../../constant/data.constant';
import {Store} from '@ngrx/store';


import * as fromRoot from '../../../store/reducers';
import * as productActions from '../../../store/actions/product.action';
import {Product} from '../../../models/product.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'frontend-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productId: number;
  reviews: Review[];

  product: Product;
  productSub: Subscription;

  loading: boolean;
  loadingSub: Subscription;

  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute) {
    this.reviews = REVIEWS;
    this.productSub = this.store.select(fromRoot.getProductProduct).subscribe(product => this.product = product);
    this.loadingSub = this.store.select(fromRoot.getProductLoading).subscribe(loading => this.loading = loading);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.store.dispatch(new productActions.StartProductLoadAction({productId: this.productId}));
    });
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
    this.loadingSub.unsubscribe();
  }

  onPutToCartButtonClick($event) {
    console.log($event);
  }

}
