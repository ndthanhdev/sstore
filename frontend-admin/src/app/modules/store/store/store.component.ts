import {Component, OnDestroy, OnInit} from '@angular/core';
import {Marker} from "../map/marker.model";
import {FakeData} from "../fake-data";
import {ActivatedRoute, Router} from "@angular/router";
import * as fromModels from "../store.model";
import {Subscription} from "rxjs/Subscription";
import * as rootReducer from "../../../store/reducers/root";
import {Store} from "@ngrx/store";
import * as storeAction from '../../../store/actions/store.action';
import {Observable} from "rxjs/Observable";
import {PaginatedListOfStores} from "../../../models/models";

@Component({
  selector: 'frontend-admin-dashboard',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {

  markers: Marker[];
  page: number;

  routeSub: Subscription;

  stores: fromModels.Store[];

  paginatedListOfStoresSub: Subscription;
  paginatedListOfStores: PaginatedListOfStores;

  isBusy: Observable<boolean>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<rootReducer.State>) {
  }

  ngOnInit() {
    this.markers = FakeData.Markers;
    this.stores = FakeData.Stores;

    this.isBusy = this.store.select(rootReducer.getStoreIsBusy);

    this.paginatedListOfStoresSub = this.store.select(rootReducer.getStorePaginatedListOfStores)
      .subscribe(paginatedListOfStores => {
        this.paginatedListOfStores = paginatedListOfStores;
      });

    this.routeSub = this.route.queryParams
      .subscribe(params => {
        this.store.dispatch(new storeAction.StartStoreLoadAction({page: +params['page'] || 1}));
      });
  }

  pageChanged($event) {
    if (!isNaN($event)
      && this.paginatedListOfStores
      && this.paginatedListOfStores.pageIndex != $event) {
      this.router.navigate(['/stores'], {queryParams: {page: $event}});
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.paginatedListOfStoresSub.unsubscribe();
  }

}
