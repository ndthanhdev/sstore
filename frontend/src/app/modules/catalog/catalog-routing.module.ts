import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogDetailComponent} from './catalog-detail/catalog-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1'
  },
  {
    path: ':id',
    component: CatalogDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}
