import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-admin-overview-card-total-user',
  templateUrl: './overview-card-total-user.component.html',
  styleUrls: ['./overview-card-total-user.component.scss']
})
export class OverviewCardTotalUserComponent implements OnInit {

  @Input()
  value: number;

  constructor() {
  }

  ngOnInit() {
  }

}
