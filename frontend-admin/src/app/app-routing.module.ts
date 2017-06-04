import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./util/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
  }
  , {
    path: 'stores',
    canActivate: [AuthGuard],
    loadChildren: 'app/modules/store/store.module#StoreModule',
  }, {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: 'app/modules/product/product.module#ProductModule'
  }, {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: 'app/modules/user/user.module#UserModule'
  }
  , {
    path: 'reviews',
    canActivate: [AuthGuard],
    loadChildren: 'app/modules/review/review.module#ReviewModule'
  }, {
    path: 'auth',
    loadChildren: 'app/modules/auth/auth.module#AuthModule'
  }
  , {
    path: 'orders',
    canActivate: [AuthGuard],
    loadChildren: 'app/modules/order/order.module#OrderModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
