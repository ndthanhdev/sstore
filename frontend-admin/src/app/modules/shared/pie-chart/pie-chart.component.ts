import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'frontend-admin-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {


  @Input()
  title: string = '';

  // array of array
  // first array should be column names
  // continue with dataTable
  @Input()
  dataTable: any = [
    ['', ''],
    ['', 0]
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
      chartType: 'PieChart',
      options: {
        height: this.height,
        chartArea: {width: '80%', height: '80%'}
      },
      dataTable: this.dataTable
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateChart();
  }

}
