import {Component} from '@angular/core';

@Component({
  selector: 'frontend-root',
  template: `
    <frontend-navbar
      [storeName]="storeName"
      [itemInCart]="itemInCart">
    </frontend-navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storeName = 'Ba Thang Hai 1';
  itemInCart = 2;

}
