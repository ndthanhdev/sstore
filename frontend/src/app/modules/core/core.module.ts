import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {NavbarLoginComponent} from './navbar-login/navbar-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule,

    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [NavbarComponent, NavbarLoginComponent],
  exports: [NavbarComponent]
})
export class CoreModule {
}
