import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
  }
  , {
    path: 'store',
    loadChildren: 'app/store/store.module#StoreModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
