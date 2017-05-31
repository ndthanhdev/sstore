import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-admin-ratting-stars',
  templateUrl: './ratting-stars.component.html',
  styleUrls: ['./ratting-stars.component.scss']
})
export class RattingStarsComponent implements OnInit {

  @Input()
  rating = 0;

  constructor() {
  }

  ngOnInit() {
  }

  private createArray(size: number) {
    return new Array(size);
  }
}
