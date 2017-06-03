import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-admin-overview-cards',
  templateUrl: './overview-cards.component.html',
  styleUrls: ['./overview-cards.component.scss']
})
export class OverviewCardsComponent implements OnInit {

  @Input()
  totalUser: number;

  @Input()
  newOrders: number;

  @Input()
  badReviews: number;

  constructor() {
  }

  ngOnInit() {
  }

}
