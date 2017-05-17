import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {NavbarLoginComponent} from './navbar-login/navbar-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CategoryTilesComponent} from './categories-tiles/category-tiles.component';
import {CategoryTileComponent} from './categories-tile/category-tile.component';
import {ProductSummaryComponent} from './product-summary/product-summary.component';
import {ProductSummaryListComponent} from './product-summary-list/product-summary-list.component';
import {SharedModule} from '../shared/shared.module';
import {ProductSummaryListHeaderComponent} from './product-summary-list-header/product-summary-list-header.component';
import {AuthService} from './auth.service';
import {NavbarUtilitiesComponent} from './navbar-utilities/navbar-utilities.component';

@NgModule({
  imports: [
    NgbModule,
    SharedModule,

    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    NavbarLoginComponent,
    CategoryTilesComponent,
    CategoryTileComponent,
    ProductSummaryComponent,
    ProductSummaryListComponent,
    ProductSummaryListHeaderComponent,
    NavbarUtilitiesComponent
  ],
  exports: [
    NavbarComponent,
    CategoryTilesComponent,
    ProductSummaryListComponent
  ],
  providers: [AuthService],
})
export class CoreModule {
}
