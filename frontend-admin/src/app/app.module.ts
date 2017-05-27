import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

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
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {DashboardEffect} from "./store/effects/dashboard.effect";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(DashboardEffect),

    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    CoreModule,
    StoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
