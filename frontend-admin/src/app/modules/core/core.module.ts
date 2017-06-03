import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import { NavBarLoginComponent } from './nav-bar/nav-bar-login/nav-bar-login.component';
import { NavBarUtilitiesComponent } from './nav-bar/nav-bar-utilities/nav-bar-utilities.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [NavBarComponent, NavBarLoginComponent, NavBarUtilitiesComponent],
  exports: [NavBarComponent]
})
export class CoreModule {
}
