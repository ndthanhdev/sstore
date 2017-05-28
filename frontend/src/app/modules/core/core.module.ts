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
import {GeolocationService} from './geolocation.service';
import {StoreService} from './store.service';
import {CheckoutComponent} from './checkout/checkout.component';
import {PaymentComponent} from './checkout/payment/payment.component';
import {CloseCartComponent} from './checkout/close-cart/close-cart.component';
import {NewOrderComponent} from './checkout/new-order/new-order.component';
import {DeliveryMethodComponent} from './checkout/delivery-method/delivery-method.component';
import {DeliveringOnstoreComponent} from './checkout/delivering-onstore/delivering-onstore.component';
import {CreateCartComponent} from './checkout/create-cart/create-cart.component';
import {DoneOnstoreComponent} from './checkout/done-onstore/done-onstore.component';
import {DeliveryOnlineComponent} from './checkout/delivery-online/delivery-online.component';
import {AgmCoreModule} from '@agm/core';
import {DoneOnlineComponent} from './checkout/done-online/done-online.component';

@NgModule({
  imports: [
    NgbModule,
    AgmCoreModule,
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
    NavbarUtilitiesComponent,
    CheckoutComponent,
    PaymentComponent,
    CloseCartComponent,
    NewOrderComponent,
    DeliveryMethodComponent,
    DeliveringOnstoreComponent,
    CreateCartComponent,
    DoneOnstoreComponent,
    DeliveryOnlineComponent,
    DoneOnlineComponent
  ],
  exports: [
    NavbarComponent,
    CategoryTilesComponent,
    ProductSummaryListComponent
  ],
  providers: [
    AuthService,
    GeolocationService,
    StoreService
  ],
})
export class CoreModule {
}
