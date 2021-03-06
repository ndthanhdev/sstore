import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {AppComponent} from './app.component';
import {CoreModule} from './modules/core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducers/index';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {CatalogEffect} from './store/effects/catalog.effect';
import {CatalogModule} from './modules/catalog/catalog.module';
import {CategoryModule} from './modules/category/category.module';
import {CategoryEffect} from './store/effects/category.effect';
import {ProductEffect} from './store/effects/product.effect';
import {ProductModule} from './modules/product/product.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {LayoutEffects} from './store/effects/layout.effect';
import {AuthEffects} from './store/effects/auth.effect';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {StoreEffect} from './store/effects/store.effect';
import {CartEffect} from './store/effects/cart.effect';
import {CartModule} from './modules/cart/cart.module';
import {OrderModule} from './modules/order/order.module';
import {OrderEffect} from './store/effects/order.effect';
import {AgmCoreModule} from '@agm/core';
import {GOOGLE_MAPS} from 'app/util/app.constants';
import {MqttEffect} from './store/effects/mqtt.effect';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('id_token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(LayoutEffects),
    EffectsModule.run(CatalogEffect),
    EffectsModule.run(CategoryEffect),
    EffectsModule.run(ProductEffect),
    EffectsModule.run(StoreEffect),
    EffectsModule.run(CartEffect),
    EffectsModule.run(OrderEffect),
    EffectsModule.run(MqttEffect),

    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAPS.API_KEY
    }),

    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    CoreModule,
    CatalogModule,
    CategoryModule,
    ProductModule,
    CartModule,
    OrderModule
  ],
  providers: [{
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
