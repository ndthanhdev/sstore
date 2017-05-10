import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-product-reviews',
  template: `
    <strong>Rating:</strong>
    <i class="fa fa-star" *ngFor="let star of createArray()"></i>
    <span>({{reviews}} Reviews)</span>
  `,
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent implements OnInit {
  @Input() rating: number;
  @Input() reviews: number;

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

  // calculate in backend

  constructor() {
  }

  ngOnInit() {
  }

  private createArray() {
    return new Array(this.rating);
  }

}
