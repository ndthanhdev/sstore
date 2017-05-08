import {Component} from '@angular/core';

@Component({
  selector: 'frontend-admin-root',
  template: `
    <frontend-admin-nav-bar [username]="'Admin'" [fullName]="'Vũ Nguyên Hưng'" #navbar></frontend-admin-nav-bar>
    <router-outlet ></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
