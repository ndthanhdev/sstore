import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./modules/shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {CoreModule} from "./modules/core/core.module";
import {AgmCoreModule} from "@agm/core";
import {reducer} from "./store/reducers/root";
import {RouterStoreModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import * as ngrx from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {DashboardEffect} from "./store/effects/dashboard.effect";
import {ProductEffect} from "./store/effects/product.effect";
import {ProductModule} from "./modules/product/product.module";
import {ReviewEffect} from "./store/effects/review.effect";
import {ReviewModule} from "./modules/review/review.module";
import {UserModule} from "./modules/user/user.module";
import {StoreEffect} from "./store/effects/store.effect";
import {StoreModule} from "./modules/store/store.module";
import {AuthModule} from "./modules/auth/auth.module";
import {AuthConfig, AuthHttp, JwtHelper} from "angular2-jwt";
import {AuthGuard} from "./util/auth.guard";
import {AuthEffect} from "./store/effects/auth.effect";
import {OrderModule} from "./modules/order/order.module";
import {OrderEffect} from "./store/effects/order.effect";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ngrx.StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AuthEffect),
    EffectsModule.run(DashboardEffect),
    EffectsModule.run(ProductEffect),
    EffectsModule.run(StoreEffect),
    EffectsModule.run(ReviewEffect),
    EffectsModule.run(OrderEffect),

    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACGaDxyjAqy8uZMSq7uGGqPcinO_Z0IsU'
    }),

    AppRoutingModule,
    SharedModule,
    CoreModule,
    DashboardModule,
    StoreModule,
    ProductModule,
    ReviewModule,
    UserModule,
    AuthModule,
    OrderModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
