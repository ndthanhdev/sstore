import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartDetailComponent} from './cart-detail/cart-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1'
  },
  {
    path: ':id',
    component: CartDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
