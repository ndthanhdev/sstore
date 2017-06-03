import {Component, OnDestroy, OnInit} from '@angular/core';
import {Marker} from "../map/marker.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import * as rootReducer from "../../../store/reducers/root";
import {Store} from "@ngrx/store";
import * as storeAction from '../../../store/actions/store.action';
import {Observable} from "rxjs/Observable";
import {PaginatedListOfStores, Stores} from "../../../models/models";
import {StartAllStoreLoadAction} from "../../../store/actions/store.action";

@Component({
  selector: 'frontend-admin-dashboard',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {

  markers: Marker[];
  page: number;

  routeSub: Subscription;

  paginatedListOfStoresSub: Subscription;
  paginatedListOfStores: PaginatedListOfStores;

  storesSub: Subscription;

  isBusy: Observable<boolean>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<rootReducer.State>) {
  }

  ngOnInit() {
    this.isBusy = this.store.select(rootReducer.getStoreIsBusy);

    this.paginatedListOfStoresSub = this.store.select(rootReducer.getStorePaginatedListOfStores)
      .subscribe(paginatedListOfStores => {
        this.paginatedListOfStores = paginatedListOfStores;
      });

    this.routeSub = this.route.queryParams
      .subscribe(params => {
        this.store.dispatch(new storeAction.StartStoreLoadAction({page: +params['page'] || 1}));
      });

    this.storesSub = this.store.select(rootReducer.getStoreStores).subscribe(
      stores => {
        this.markers = stores.map(this.storesToMarker);
      });
    this.store.dispatch(new StartAllStoreLoadAction({}));
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
    this.storesSub.unsubscribe();
  }

  storesToMarker(store: Stores): Marker {
    return {
      id: store.id,
      latitude: +store.latitude,
      longitude: +store.longitude,
      address: store.address,
      icon: store.primary ? 'http://maps.google.com/mapfiles/kml/pal4/icon47.png' : '',
      isDraggable: false,
      name: store.name,
    };
  }

}
