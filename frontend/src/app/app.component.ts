import {Component} from '@angular/core';
import {Tile} from './models/tile.model';

@Component({
  selector: 'frontend-root',
  template: `
    <frontend-navbar
      [storeName]="storeName"
      [itemInCart]="itemInCart">
    </frontend-navbar>
    <div class="jumbotron">
      <div class="container">
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
    },
    {
      icon: 'fa fa-book fa-3x fa-fw',
      title: 'Book8'
    },

  ];

}
