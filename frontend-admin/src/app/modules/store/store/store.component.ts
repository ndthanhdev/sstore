import {Component, OnDestroy, OnInit} from '@angular/core';
import {Marker} from "../map/marker.model";
import {FakeData} from "../fake-data";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "../store.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'frontend-admin-dashboard',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {

  markers: Marker[];
  page: number;
  private stores: Store[];

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,) {
  }

  ngOnInit() {
    this.markers = FakeData.Markers;
    this.stores = FakeData.Stores;
    this.sub = this.route.params.subscribe(params => {
      // dispatch actions here
    });
  }

  onPageChanged($event) {
    // alert($event);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
