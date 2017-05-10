import {Component} from '@angular/core';
import {Tile} from './models/tile.model';
import {Catalog} from './models/catalog.model';

@Component({
  selector: 'frontend-root',
  template: `
    <frontend-navbar
      [storeName]="storeName"
      [itemInCart]="itemInCart"
      [catalogs]="catalogs">
    </frontend-navbar>
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
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storeName = 'Ba Thang Hai 1';
  itemInCart = 2;
  catalogs: Catalog[] = [
    {
      id: 1,
      name: 'Missouri',
      description: 'Explicabo beatae dolor incidunt perspiciatis fugit possimus.'
    },
    {
      id: 2,
      name: 'Ohio',
      description: 'Explicabo odio aspernatur sint dolorem.'
    },

  ];
  tiles: Tile[] = [
    {
      icon: 'fa fa-book fa-3x fa-fw',
      title: 'Book'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      title: 'Book1'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      title: 'Book2'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      title: 'Book3'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      title: 'Book4'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      title: 'Book5'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      title: 'Book6'
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      title: 'Book7'
    }
  ];

}
