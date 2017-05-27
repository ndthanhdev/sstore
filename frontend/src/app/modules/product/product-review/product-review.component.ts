import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../../models/review.model';

@Component({
  selector: 'frontend-product-review',
  template: `
    <div class="card mb-3">
      <div class="card-header d-flex align-items-center justify-content-start">
        <span class="lead mr-2">#{{review.id}} {{review.user.full_name}}</span>
        <frontend-product-review-rating
          [rating]="review.rating">
        </frontend-product-review-rating>
        <span class="text-muted ml-auto">{{review.created_at | amTimeAgo}}</span>
      </div>
      <div class="card-block">
        {{review.content}}
      </div>
    </div>
  `,
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {
  @Input() review: Review;

  constructor() {
  }

  ngOnInit() {
  }

}
