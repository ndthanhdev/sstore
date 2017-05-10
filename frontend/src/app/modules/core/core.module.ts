import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {NavbarLoginComponent} from './navbar-login/navbar-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CategoryTilesComponent} from './categories-tiles/category-tiles.component';
import {CategoryTileComponent} from './categories-tile/category-tile.component';

@NgModule({
  imports: [
    NgbModule,

    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    NavbarLoginComponent,
    CategoryTilesComponent,
    CategoryTileComponent
  ],
  exports: [NavbarComponent, CategoryTilesComponent]
})
export class CoreModule {
}
