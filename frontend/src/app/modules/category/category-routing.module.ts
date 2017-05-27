import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: ':id',
        component: CategoryDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {

}
