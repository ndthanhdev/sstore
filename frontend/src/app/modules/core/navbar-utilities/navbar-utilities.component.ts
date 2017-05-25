import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../../models/user.model';

@Component({
  selector: 'frontend-navbar-utilities',
  template: `
    <div ngbDropdown>
      <button class="btn btn-link" ngbDropdownToggle>
        <img [src]="user.avatar" alt="avatar" class="rounded" width="20px" height="20px">
        {{user.username}}
      </button>

      <div class="dropdown-menu dropdown-menu-right">
        <button class="dropdown-item">
          <i class="fa fa-user mr-2"></i>Profile
        </button>

        <button class="dropdown-item" [routerLink]="['/orders']">
          <i class="fa fa-list-alt mr-2"></i>My Orders
        </button>

        <button class="dropdown-item" (click)="onLogoutButtonClick()">
          <i class="fa fa-sign-out mr-2"></i>Logout
        </button>

      </div>
    </div>
  `,
  styleUrls: ['./navbar-utilities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarUtilitiesComponent {
  @Input() user: User;

  @Output() logoutButtonClicked = new EventEmitter();

  onLogoutButtonClick() {
    this.logoutButtonClicked.emit();
  }
}
