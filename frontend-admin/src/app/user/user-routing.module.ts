import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'user'},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
