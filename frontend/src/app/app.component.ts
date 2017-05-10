import {Component} from '@angular/core';
import {Catalog} from './models/catalog.model';

@Component({
  selector: 'frontend-root',
  template: `
    <frontend-navbar
      [storeName]="storeName"
      [itemInCart]="itemInCart"
      [catalogs]="catalogs">
    </frontend-navbar>
    <router-outlet></router-outlet>
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


}
