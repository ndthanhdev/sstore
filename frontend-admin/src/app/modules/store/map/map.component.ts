import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AgmMap} from "@agm/core";
import {Marker} from "./marker.model";

@Component({
  selector: 'frontend-admin-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

  latitude: number = 10.77;
  longitude: number = 106.67;

  @Input()
  markers: Marker[];

  @ViewChild('map')
  map: AgmMap;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.markers.length > 0) {
    //   this.latitude = this.markers[0].latitude;
    //   this.longitude = this.markers[0].longitude;
    // }
  }

}
