import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
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

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(CatalogEffect),
    EffectsModule.run(CategoryEffect),
    EffectsModule.run(ProductEffect),

    NgbModule.forRoot(),

    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    CoreModule,
    CatalogModule,
    CategoryModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
