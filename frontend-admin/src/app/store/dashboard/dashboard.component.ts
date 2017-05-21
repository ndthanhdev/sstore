import {Component, OnInit} from '@angular/core';
import {Marker} from "../map/marker.model";
import {FakeData} from "../store/fake-data";
import {ActivatedRoute} from "@angular/router";
import {Store} from "../store.model";

@Component({
  selector: 'frontend-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  markers: Marker[];
  private sub: any;
  page: number;
  private stores: Store[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.markers = FakeData.Markers;
    this.stores = FakeData.Stores;
    this.sub = this.route.params.subscribe(params => {
      this.page = +params['page']; // (+) converts string 'id' to a number
    });
  }

  onPageChanged($event) {
    alert($event);
  }

}
