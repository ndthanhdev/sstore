import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [UserComponent, DetailComponent, CreateComponent]
})
export class UserModule { }
