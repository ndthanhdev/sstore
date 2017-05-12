import {Component, OnInit} from '@angular/core';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'frontend-category',
  template: `
    <div class="jumbotron">
      <div class="container">
        <ol class="breadcrumb pl-0 row">
          <li class="breadcrumb-item"><a href="#"><span class="lead">Books</span></a></li>
          <li class="breadcrumb-item"><a href="#"><span class="lead">Magazine</span></a></li>
          <li class="breadcrumb-item active"><span class="lead">Beauty Magazine</span></li>
        </ol>
        <frontend-category-tiles
          class="row justify-content-md-between align-items-center my-3"
          [tiles]="tiles">
        </frontend-category-tiles>
      </div>
    </div>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  tiles: Category[] = [ // child category of current category
    {
      id: 1,
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book'
    },
    {
      id: 2,
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book1'
    },
    {
      id: 3,
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book2'
    },
    {
      id: 4,
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book3'
    },
    {
      id: 5,
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book4'
    },
    {
      id: 6,
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book5'
    },
    {
      id: 7,
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book6'
    },
    {
      id: 8,
      icon: 'fa fa-book fa-3x fa-fw',
      name: 'Book7'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}