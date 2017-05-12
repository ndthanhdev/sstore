/**
 * Created by vunguyenhung on 5/10/17.
 */


import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
