import {Component, OnInit} from '@angular/core';
import {Constant} from "../constant";

@Component({
  selector: 'frontend-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalSalesChartOptions: any;

  recentUsersChartOptions: any;

  reviewPercentsChartOptions: any;

  constructor() {
    this.totalSalesChartOptions = Constant.totalSalesChartOptions;
    this.reviewPercentsChartOptions = Constant.reviewPercentsChartOptions;
    this.recentUsersChartOptions = Constant.recentUsersChartOptions;

  }

  ngOnInit() {

  }

}
