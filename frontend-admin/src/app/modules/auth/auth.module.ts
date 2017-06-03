import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {JwtHelper} from "angular2-jwt";
import {AuthGuard} from "../../util/auth.guard";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers:[
    AuthService,
    JwtHelper,
    AuthGuard
  ]
})
export class AuthModule { }
