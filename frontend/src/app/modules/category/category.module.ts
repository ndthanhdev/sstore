import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryComponent} from './category/category.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,

    CoreModule
  ],
  declarations: [CategoryComponent, CategoryDetailComponent]
})
export class CategoryModule {
}