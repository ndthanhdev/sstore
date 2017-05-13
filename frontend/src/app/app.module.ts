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

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(CatalogEffect),

    NgbModule.forRoot(),

    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    CoreModule,
    CatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
