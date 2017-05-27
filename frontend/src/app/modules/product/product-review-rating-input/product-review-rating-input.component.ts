import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'frontend-product-review-rating-input',
  template: `
    <i class="fa fa-star-o mr-1"
       *ngFor="let star of stars; let i = index"
       [ngClass]="{'fa-star': star === 1, 'fa-star-o': star === 0}"
       (click)="onStarClick(i)"
       (mouseenter)="onStarHoverIn(i)"
       (mouseleave)="onStartHoverOut()"></i>
  `,
  styleUrls: ['./product-review-rating-input.component.scss']
})
export class ProductReviewRatingInputComponent implements OnInit {

  @Output() startClicked = new EventEmitter();

  stars = new Array(5).fill(0);

  ratedStars = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onStarHoverIn(index: number) {
    this.ratedStars = 0;
    this.stars = this.stars.map((star, i) => i <= index ? 1 : 0);
  }

  onStartHoverOut() {
    if (this.ratedStars <= 0)
      this.stars = this.stars.fill(0);
  }

  onStarClick(index: number) {
    this.ratedStars = index;
    this.stars[this.ratedStars] = 1;
    this.startClicked.emit({star: index});
  }
}
