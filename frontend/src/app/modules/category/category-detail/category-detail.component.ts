import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'frontend-category-detail',
  template: `
    <span class="col-12 display-4">
      Category: {{routeId}}
    </span>
    <hr>
  `,
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  routeId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.routeId = params['id']);
  }

}
