import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {CartDetailGuestComponent} from './cart-detail-guest/cart-detail-guest.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'guest',
    pathMatch: 'full'
  },
  {
    path: 'guest',
    component: CartDetailGuestComponent
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
