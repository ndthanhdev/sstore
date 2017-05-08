import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardModule} from "./dashboard/dashboard.module";
import {CoreModule} from "./core/core.module";
import {StoreModule} from "./store/store.module";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
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
