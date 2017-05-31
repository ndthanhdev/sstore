import {Component, Input} from '@angular/core';
import {CategoryBreadcrumb} from '../../../models/category.model';

@Component({
  selector: 'frontend-category-breadcrumb',
  template: `
    <ol class="breadcrumb pl-0 row">
      <li class="breadcrumb-item"
          *ngFor="let breadcrumb of breadcrumbs; let i = index"
          [ngClass]="{'active': i + 1 === breadcrumbs.length}">
        <a [routerLink]="[breadcrumb.link.path, breadcrumb.link.param]"><span class="lead">{{breadcrumb.name}}</span></a>
      </li>
    </ol>
  `,
  styleUrls: ['./category-breadcrumb.component.scss']
})
export class CategoryBreadcrumbComponent {
  @Input() breadcrumbs: CategoryBreadcrumb[];
}
