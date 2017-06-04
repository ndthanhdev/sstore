import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CustomAttributes} from "../../../../models/models";

@Component({
  selector: '[frontend-admin-add-custom-attribute]',
  template: `
    <th scope="row">#</th>
    <td>
      <input type="text"
             class="form-control"
             #name_input="ngModel"
             [(ngModel)]="customAttribute.name"
             required></td>
    <td>
      <input type="text"
             class="form-control"
             #value_input="ngModel"
             [(ngModel)]="customAttribute.value"
             required></td>
    <td>
      <button class="btn btn-sm btn-outline-success" [disabled]="!name_input.valid||!value_input.valid"
              (click)="add.emit(customAttribute)"><i class="fa fa-check" aria-hidden="true"></i>
      </button>
    </td>
    <td>
      <button class="btn btn-sm btn-outline-danger"
              (click)="cancel.emit()"><i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </td>`,
  styleUrls: ['./add-custom-attribute.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCustomAttributeComponent implements OnInit {

  customAttribute: CustomAttributes = {};

  @Output()
  cancel = new EventEmitter();

  @Output()
  add = new EventEmitter<CustomAttributes>();

  constructor() {
  }

  ngOnInit() {
  }


}
