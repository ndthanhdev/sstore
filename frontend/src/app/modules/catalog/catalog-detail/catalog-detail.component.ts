import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'frontend-catalog-detail',
  template: `
    <div class="jumbotron">
      <div class="container">
        <frontend-category-tiles
          class="row justify-content-md-between align-items-center my-3"
          [tiles]="tiles">
        </frontend-category-tiles>
      </div>
    </div>
    <div class="container">
      <p>
        catalog-detail works! {{routeId}}
      </p>
    </div>
  `,
  styleUrls: ['./catalog-detail.component.scss']
})
export class CatalogDetailComponent implements OnInit {
  routeId: number;

  tiles: Category[] = [ // all category of current catalog
    {
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book1'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book2'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book3'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book4'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book5'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book6'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book7'
    }
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.routeId = params['id']);
  }

}
