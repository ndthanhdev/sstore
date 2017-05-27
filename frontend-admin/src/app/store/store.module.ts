import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreRoutingModule} from './store-routing.module';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from "@agm/core";
import {SharedModule} from "../shared/shared.module";
import {CreateComponent} from './create/create.component';
import {DetailComponent} from './detail/detail.component';
import {StoreComponent} from './store/store.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACGaDxyjAqy8uZMSq7uGGqPcinO_Z0IsU'
    }),
    SharedModule,
    NgbModule
  ],
  declarations: [
    MapComponent,
    CreateComponent,
    DetailComponent,
    StoreComponent]
})
export class StoreModule {
}
