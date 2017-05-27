import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
  }
  , {
    path: 'store',
    loadChildren: 'app/modules/store/store.module#StoreModule',
  }, {
    path: 'product',
    loadChildren: 'app/modules/product/product.module#ProductModule'
  }  , {
    path: 'user',
    loadChildren: 'app/modules/user/user.module#UserModule'
  }
  , {
    path: 'review',
    loadChildren: 'app/modules/review/review.module#ReviewModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
