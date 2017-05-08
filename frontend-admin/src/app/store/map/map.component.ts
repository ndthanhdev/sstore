import {Component, Input, OnInit} from '@angular/core';
import {Marker} from "@agm/core/services/google-maps-types";

@Component({
  selector: 'frontend-admin-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  lat: number = 51.678418;
  lng: number = 7.809007;

  @Input()
  markers:Marker[];

  constructor() { }

  ngOnInit() {
  }

}
