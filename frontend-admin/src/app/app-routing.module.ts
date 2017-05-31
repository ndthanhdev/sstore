import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
  }
  , {
    path: 'stores',
    loadChildren: 'app/modules/store/store.module#StoreModule',
  }, {
    path: 'products',
    loadChildren: 'app/modules/product/product.module#ProductModule'
  }  , {
    path: 'users',
    loadChildren: 'app/modules/user/user.module#UserModule'
  }
  , {
    path: 'reviews',
    loadChildren: 'app/modules/review/review.module#ReviewModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
