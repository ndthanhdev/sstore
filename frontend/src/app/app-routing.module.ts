/**
 * Created by vunguyenhung on 5/10/17.
 */


import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './modules/core/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'catalogs'
  },
  {
    path: 'categories',
    loadChildren: 'app/modules/category/category.module#CategoryModule'
  },
  {
    path: 'catalogs',
    loadChildren: 'app/modules/catalog/catalog.module#CatalogModule'
  },
  {
    path: 'products',
    loadChildren: 'app/modules/product/product.module#ProductModule'
  },
  {
    path: 'carts',
    loadChildren: 'app/modules/cart/cart.module#CartModule'
  },
  {
    path: 'orders',
    loadChildren: 'app/modules/order/order.module#OrderModule'
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
