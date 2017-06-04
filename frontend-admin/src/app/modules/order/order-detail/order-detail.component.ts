import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Orders, ShoppingCartDetails} from "../../../models/models";
import {Observable} from "rxjs/Observable";
import {AppConstants} from "../../../util/constant";
import * as rootReducer from "../../../store/reducers/root";
import * as orderAction from '../../../store/actions/order.action';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";

@Component({
  selector: 'frontend-admin-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit, OnDestroy {

  isBusy: Observable<boolean>;

  order: Orders;
  orderSub: Subscription;

  deliveredLocation = {
    lat: AppConstants.HCMC_LOCATION.latitude,
    lng: AppConstants.HCMC_LOCATION.longitude
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<rootReducer.State>) {

  }

  ngOnInit() {
    this.orderSub = this.store.select(rootReducer.getOrderOrder)
      .filter(order => !!order)
      .subscribe(order => {
        this.order = order;
        this.deliveredLocation = {
          lat: +this.order.latitude,
          lng: +this.order.longitude
        };
      });
    this.isBusy = this.store.select(rootReducer.getOrderIsBusy);

    this.route.params.subscribe(params => {
      this.store.dispatch(new orderAction.StartOrderLoadAction({id: +params['id']}));
    });
  }

  subAmount(): string {
    if (this.order) {
      return this.order.shoppingCart.shoppingCartDetails
        .reduce((pre, curr: ShoppingCartDetails) => pre + (curr.quantity * +curr.price), 0)
        .toString();
    }
  }

  isOnStore() {
    return this.order.latitude == null && this.order.longitude == null;
  }

  ngOnDestroy(): void {
    this.orderSub.unsubscribe();
  }

}
