import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
  }
  , {
    path: 'store',
    loadChildren: 'app/store/store.module#StoreModule',
  }, {
    path: 'product',
    loadChildren: 'app/product/product.module#ProductModule'
  }  , {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule'
  }
  , {
    path: 'user',
    loadChildren: 'app/review/review.module#ReviewModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
