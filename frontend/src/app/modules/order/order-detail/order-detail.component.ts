import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../../../models/order.model';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';
import * as orderActions from '../../../store/actions/order.action';
import {CartDetail} from '../../../models/cart-detail.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'frontend-order-detail',
  template: `
    <div class="jumbotron bg-primary text-white">
      <div class="container">
        <span class="d-flex align-items-start">
            <span class="display-3 mr-2">Order: {{order?.code}}</span>
            <frontend-order-state-button
              [state]="order?.state">
            </frontend-order-state-button>
        </span>

        <div *ngIf="order?.rating">
          <span>{{order?.shopping_cart.user.full_name}}</span>
          <span>
                <frontend-product-review-rating
                  [rating]="order.rating">
                </frontend-product-review-rating>
            </span>
          <span> - {{order?.comment}}</span>
        </div>

        <div>
          <span>Created at: {{order?.created_at | amTimeAgo}}</span>
          <span class="mx-2">-</span>
          <span>Last updated: {{order?.updated_at | amTimeAgo}}</span>
        </div>

      </div>
    </div>


    <ng-template #spinning>
      <frontend-loading></frontend-loading>
    </ng-template>

    <div class="container mb-5" *ngIf="!(loading | async);else spinning">
      <!--START ITEM LIST-->
      <span class="col-12 display-4">
        Items:
    </span>
      <hr>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Variant</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let detail of order?.shopping_cart.details">
          <th scope="row">1</th>
          <td><a href="#">{{detail.store_product_variant.product_variant.product.name}}</a></td>
          <td>
            <frontend-product-variation-values
              [variationValues]="detail.store_product_variant.product_variant.variation_values">
            </frontend-product-variation-values>
          </td>
          <td>{{detail.store_product_variant.price | VND}}</td>
          <td>{{detail.quantity}}</td>
          <td>{{(detail.store_product_variant.price * detail.quantity) | VND}}</td>
        </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-end mr-5">
        <span class="lead">Subtotal: {{subAmount() | VND}}</span>
      </div>
      <!--END ITEM LIST-->
    </div>
  `,
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  routeId: number;


  order: Order;
  orderSub: Subscription;

  loading: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute) {
    this.orderSub = this.store.select(fromRoot.getOrderOrder).subscribe(order => this.order = order);
    this.loading = this.store.select(fromRoot.getOrderLoading);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.routeId = params['id'];
      this.store.dispatch(new orderActions.StartOrderLoadAction({orderId: this.routeId}));
    });
  }

  ngOnDestroy(): void {
    this.orderSub.unsubscribe();
  }

  subAmount(): string {
    if (this.order) {
      return this.order.shopping_cart.details
        .reduce((pre, curr: CartDetail) => pre + (curr.quantity * +curr.store_product_variant.price), 0)
        .toString();
    }
  }
}
