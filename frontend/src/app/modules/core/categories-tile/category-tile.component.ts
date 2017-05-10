import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'frontend-category-tile',
  template: `
    <div class="card">
      <div class="row">
        <div class="col-4 bg-success text-white p-0 rounded-left d-flex align-items-center justify-content-center">
          <div class="card-img-bottom">
            <i [class]="tile.icon"></i>
          </div>
        </div>
        <div class="card-block col-8 d-flex">
          <span class="card-title h4 mb-0">{{tile.name}}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./category-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryTileComponent {
  @Input() tile: Category;

  constructor() {
  }
}
