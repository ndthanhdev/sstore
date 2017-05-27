import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-admin-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input()
  dataTable:any;

  @Input()
  title:string;

  constructor() {
  }

  ngOnInit() {
  }



}
