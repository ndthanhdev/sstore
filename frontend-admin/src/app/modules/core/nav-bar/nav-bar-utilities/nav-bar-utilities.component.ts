import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Users} from "../../../../models/models";

@Component({
  selector: 'frontend-admin-nav-bar-utilities',
  template: `
    <div ngbDropdown>
      <button class="btn btn-link" ngbDropdownToggle>
        <img [src]="user.avatar" alt="avatar" class="rounded" width="20px" height="20px">
        {{user.fullName}}
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <button class="dropdown-item">
          <i class="fa fa-user mr-2"></i>Profile
        </button>
        <button class="dropdown-item">
          <i class="fa fa-list-alt mr-2"></i>My Orders
        </button>
        <button class="dropdown-item" (click)="onLogoutButtonClick()">
          <i class="fa fa-sign-out mr-2"></i>Logout
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./nav-bar-utilities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarUtilitiesComponent implements OnInit {


  @Input() user: Users;

  @Output() logoutButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onLogoutButtonClick() {
    this.logoutButtonClicked.emit();
  }

}
