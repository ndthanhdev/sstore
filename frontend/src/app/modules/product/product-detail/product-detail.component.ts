import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Review} from '../../../models/review.model';
import {REVIEWS} from '../../../constant/data.constant';

@Component({
  selector: 'frontend-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  routeId: number;
  reviews: Review[];

  constructor(private route: ActivatedRoute) {
    this.reviews = REVIEWS;
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.routeId = params['id']);
  }

}
