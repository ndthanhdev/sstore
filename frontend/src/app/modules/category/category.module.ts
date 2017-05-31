import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {CoreModule} from '../core/core.module';
import {CategoryService} from './category.service';
import {CategoryBreadcrumbComponent} from './category-breadcrumb/category-breadcrumb.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,

    CoreModule
  ],
  declarations: [CategoryDetailComponent, CategoryBreadcrumbComponent],
  providers: [CategoryService]
})
export class CategoryModule {
}
