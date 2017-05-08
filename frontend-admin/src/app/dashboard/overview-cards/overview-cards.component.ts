import {Component, Input, OnInit} from '@angular/core';
import {OverviewCard} from "../overview-card/overview-card.model";

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

  private totalUserOverviewCard: OverviewCard;

  private newOrdersOverviewCard: OverviewCard;

  private badReviewsOverviewCard: OverviewCard;

  constructor() {
  }

  ngOnInit() {
  }

}
