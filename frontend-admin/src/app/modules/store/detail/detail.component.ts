import {Component, OnDestroy, OnInit} from '@angular/core';
import {Stores} from "../../../models/models";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as rootReducer from "../../../store/reducers/root";
import * as storeActions from '../../../store/actions/store.action';
import {Marker} from "../map/marker.model";
import {AppConstants} from "../../../util/constant";
import {isUndefined} from "util";

@Component({
  selector: 'frontend-admin-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  isBusy: Observable<boolean>;


  storeModel: Stores;
  storeSub: Subscription;

  storesSub: Subscription;
  stores: Stores[];

  monthSales: Observable<any[][]>;

  storeLocation = {
    lat: AppConstants.HCMC_LOCATION.latitude,
    lng: AppConstants.HCMC_LOCATION.longitude
  };

  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<rootReducer.State>) {
  }

  ngOnInit() {
    this.isBusy = this.store.select(rootReducer.getStoreIsBusy);
    this.storeSub = this.store.select(rootReducer.getStoreStore).subscribe(store => {
      this.storeModel = store;
      this.storeLocation = {
        lat: store ? +store.latitude : this.storeLocation.lat,
        lng: store ? +store.longitude : this.storeLocation.lng
      };
    });
    this.storesSub = this.store.select(rootReducer.getStoreStores).subscribe(
      stores => {
        // this.markers = stores.map(s => this.storesToMarker(s, this.id));
        this.stores = stores;
      });
    this.monthSales = this.store.select(rootReducer.getStoreMonthSales);
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.store.dispatch(new storeActions.StartStoreLoadAction({id: this.id}));
      this.store.dispatch(new storeActions.StartAllStoreLoadAction({}));
      this.store.dispatch(new storeActions.StartStoreMonthSalesLoadAction({id: this.id}));
    });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  toNumber(s: string): number {
    return +s;
  }
}
