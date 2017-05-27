import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'frontend-category-tiles',
  template: `
    <i class="fa fa-angle-left hidden-md-down fa-3x"
       [ngClass]="{'text-muted': currentSlide <= 1}"
       (click)="previousSlide()">
    </i>

    <ng-template ngFor let-tile [ngForOf]="tiles" let-i="index" [ngForTrackBy]="trackByFn">
      <frontend-category-tile
        class="col-lg-3 col-md-6 offset-md-3 offset-lg-0 mb-2"
        *ngIf="isInCurrentSlide(i)"
        [tile]="tile">
      </frontend-category-tile>
    </ng-template>

    <ng-template [ngIf]="tiles?.length <= 0">
      <p class="lead">There's no child category on this section</p>
    </ng-template>


    <i class="fa fa-angle-right hidden-md-down fa-3x"
       [ngClass]="{'text-muted': currentSlide*3 >= tiles?.length}"
       (click)="nextSlide()">
    </i>
  `,
  styleUrls: ['./category-tiles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryTilesComponent {
  @Input() tiles: Category[];

  currentSlide = 1;

  constructor() {
  }

  nextSlide() {
    if (this.currentSlide * 3 < this.tiles.length) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 1) {
      this.currentSlide--;
    }
  }

  isInCurrentSlide(index: number) {
    return index < (this.currentSlide * 3) && index >= ((this.currentSlide - 1) * 3);
  }

  trackByFn(index, item) {
    return item.title;
  }
}
