import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-product-review-rating',
  template: `
    <i class="fa fa-star mr-1"
       *ngFor="let star of createArray(5); let i = index"
       [ngClass]="{'fa-star': i < rating, 'fa-star-o': i >= rating}"></i>
  `,
  styleUrls: ['./product-review-rating.component.scss']
})
export class ProductReviewRatingComponent implements OnInit {
  @Input() rating = 0;

  constructor() {
  }

  ngOnInit() {
  }

  private createArray(size: number) {
    return new Array(size);
  }

}
