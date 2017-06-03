import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-admin-overview-card-new-orders',
  templateUrl: './overview-card-new-orders.component.html',
  styleUrls: ['./overview-card-new-orders.component.scss']
})
export class OverviewCardNewOrdersComponent implements OnInit {


  @Input()
  value: number;

  constructor() { }

  ngOnInit() {
  }

}
