import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1'
  },
  {
    path: ':id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
