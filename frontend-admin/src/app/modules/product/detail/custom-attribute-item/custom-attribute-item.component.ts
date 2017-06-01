import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {CustomAttributes} from "../../../../models/models";

@Component({
  selector: '[frontend-admin-custom-attribute-item]',
  template: `
    <ng-template [ngIf]="!isEditing">
      <th scope="row">{{customAttribute.id}}</th>
      <td>{{customAttribute.name}}</td>
      <td>{{customAttribute.value}}</td>
      <td>
        <button class="btn btn-sm btn-outline-primary" (click)="isEditing=true">Edit</button>
      </td>
    </ng-template>
    <ng-template [ngIf]="isEditing">
      <th scope="row">{{_customAttribute?.id}}</th>
      <td>{{_customAttribute?.name}}</td>
      <td><input type="text"
                 class="form-control"
                 #value="ngModel"
                 [(ngModel)]="_customAttribute.value"></td>
      <td>
        <button class="btn btn-sm btn-outline-success" (click)="onChange()">Save</button>
      </td>
    </ng-template>
  `,
  styleUrls: ['./custom-attribute-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomAttributeItemComponent implements OnInit, OnChanges {


  @Input()
  customAttribute: CustomAttributes;

  private _customAttribute: CustomAttributes;

  @Output()
  customAttributeChange = new EventEmitter<CustomAttributes>();

  isEditing: boolean;


  constructor() {
    this.isEditing = false;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._customAttribute = Object.assign({}, this.customAttribute);
  }

  private onChange() {
    this.isEditing = false;
    this.customAttributeChange.emit(this._customAttribute);

  }

}
