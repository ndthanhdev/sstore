import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../../../models/order.model';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';
import * as orderActions from '../../../store/actions/order.action';
import {CartDetail} from '../../../models/cart-detail.model';
import {Observable} from 'rxjs/Observable';
import {GOOGLE_MAPS} from '../../../util/app.constants';

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
          <span>Created at: {{order?.created_at | amUTCOffset:7 | amTimeAgo}}</span>
          <span class="mx-2">-</span>
          <span>Last updated: {{order?.updated_at | amUTCOffset:7 | amTimeAgo}}</span>
        </div>

      </div>
    </div>


    <ng-template #spinning>
      <frontend-loading></frontend-loading>
    </ng-template>

    <div class="container mb-5" *ngIf="!(loading | async);else spinning">

      <!--START DELIVERY INFORMATION -->
      <span class="display-4">
        <span>Delivery Information:</span>
        <span *ngIf="!isOnStore()">Online</span>
        <span *ngIf="isOnStore()">Onstore</span>
      </span>
      <hr>
      <div class="row mb-3" *ngIf="!isOnStore()">
        <div class="col-6">
          <agm-map
            [latitude]="deliveredLocation.lat"
            [longitude]="deliveredLocation.lng"
            [zoom]="13">
            <agm-marker
              [latitude]="deliveredLocation.lat"
              [longitude]="deliveredLocation.lng">
            </agm-marker>
          </agm-map>
        </div>
        <form class="col-6">
          <div class="form-group">
            <label for="address-input">Address:</label>
            <input readonly type="text" class="form-control" id="address-input" [value]="order.address">
          </div>
          <div class="form-group">
            <label for="latitude-input">Latitude:</label>
            <input readonly type="text" class="form-control" id="latitude-input" [value]="order.latitude">
          </div>
          <div class="form-group">
            <label for="longitude-input">Longitude:</label>
            <input readonly type="text" class="form-control" id="longitude-input" [value]="order.longitude">
          </div>
          <div class="form-group">
            <label for="tel-input">Tel:</label>
            <input readonly type="tel" class="form-control" id="tel-input" [value]="order.tel">
          </div>
        </form>
      </div>
      <!--START DELIVERY INFORMATION -->

      <br>

      <!--START ITEM LIST-->
      <span class="display-4">
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
          <td><a [routerLink]="['/products', detail.store_product_variant.product_variant.product.id]">
            {{detail.store_product_variant.product_variant.product.name}}
          </a>
          </td>
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

  deliveredLocation = {
    lat: GOOGLE_MAPS.HCMC_LOCATION.latitude,
    lng: GOOGLE_MAPS.HCMC_LOCATION.longitude
  };

  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute) {
    this.orderSub = this.store.select(fromRoot.getOrderOrder)
      .filter(order => !!order)
      .subscribe(order => {
        this.order = order;
        this.deliveredLocation = {
          lat: +this.order.latitude,
          lng: +this.order.longitude
        };
      });
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

  isOnStore() {
    return this.order.latitude == null && this.order.longitude == null;
  }
}
