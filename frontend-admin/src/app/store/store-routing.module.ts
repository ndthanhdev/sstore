import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoreComponent} from "./store/store.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {
    path: '', component: StoreComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'create', component: CreateComponent},
      {path: 'detail/:id', component: DetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {
}
