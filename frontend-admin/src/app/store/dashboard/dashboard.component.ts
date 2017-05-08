import { Component, OnInit } from '@angular/core';
import {Marker} from "../map/marker.model";
import {FakeData} from "../store/fake-data";

@Component({
  selector: 'frontend-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  markers: Marker[];
  constructor() { }

  ngOnInit() {

    this.markers = FakeData.Markers;
  }

}
