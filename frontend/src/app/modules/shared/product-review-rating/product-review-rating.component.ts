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

  // star =
  // ((5 * reviewCount(5_star) +
  // 4 * reviewCount(4_star) +
  // 3 * reviewCount(3_star) +
  // 2 * reviewCount(2_star) +
  // reviewCount(1 star)) /
  // (reviewCount(5_star) +
  // reviewCount(4_star) +
  // reviewCount(3_star) +
  // reviewCount(2_star) +
  // reviewCount(1_star))

  constructor() {
  }

  ngOnInit() {
  }

  private createArray(size: number) {
    return new Array(size);
  }

}
