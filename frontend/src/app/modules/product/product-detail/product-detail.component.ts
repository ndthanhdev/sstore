import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {Product} from '../../../models/product.model';
import {Subscription} from 'rxjs/Subscription';
import {ActiveCart} from 'app/models/cart.model';

import * as fromRoot from '../../../store/reducers';
import * as productActions from '../../../store/actions/product.action';
import * as cartActions from '../../../store/actions/cart.action';


@Component({
  selector: 'frontend-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productId: number;
  product: Product;
  productSub: Subscription;

  loading: boolean;
  loadingSub: Subscription;

  activeCart: ActiveCart;
  activeCartSub: Subscription;

  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute) {
    this.productSub = this.store.select(fromRoot.getProductProduct).subscribe(product => this.product = product);
    this.loadingSub = this.store.select(fromRoot.getProductLoading).subscribe(loading => this.loading = loading);
    this.activeCartSub = this.store.select(fromRoot.getCartActiveCart).subscribe(activeCart => this.activeCart = activeCart);
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
    if (this.activeCart && this.activeCart.id) {
      this.store.dispatch(new cartActions.StartProductAddAction({
        cartDetail: {
          shopping_cart_id: this.activeCart.id,
          price: $event.price,
          quantity: $event.quantity,
          store_product_variant_id: $event.store_product_variant_id
        }
      }));
    } else {
      this.store.dispatch(new cartActions.StartLocalProductAddAction({
        cartDetail: {
          price: $event.price,
          quantity: $event.quantity,
          store_product_variant_id: $event.store_product_variant_id,
          store_product_variant: $event.store_product_variant
        }
      }));
    }
  }

}
