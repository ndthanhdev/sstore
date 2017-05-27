import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'frontend-admin-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges {


  @Input()
  title: string = '';

  @Input()
  vAxis: string = '';

  @Input()
  hAxis: string = '';

  // array of array
  // first array should be column names
  // continue with dataTable
  @Input()
  dataTable: any = [
    ['1', '2'],
    [3, 4]

  ];

  @Input()
  height: number = 400;

  bindData: any;

  constructor() {
  }

  ngOnInit() {
    this.updateChart();
  }

  updateChart() {
    this.bindData = {
      chartType: 'ColumnChart',
      options: {
        hAxis: {title: this.hAxis},
        vAxis: {title: this.vAxis},
        legend: {position: 'none'},
        height: this.height
      },
      dataTable: this.dataTable
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateChart();
  }

}
