import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-admin-overview-card-bad-reviews',
  templateUrl: './overview-card-bad-reviews.component.html',
  styleUrls: ['./overview-card-bad-reviews.component.scss']
})
export class OverviewCardBadReviewsComponent implements OnInit {


  @Input()
  value: number;

  constructor() { }

  ngOnInit() {
  }

}
