import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'frontend-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarLoginComponent {

  @Input() loading: boolean;

  @Output() loginButtonClicked = new EventEmitter();

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLoginButtonClick() {
    if (this.loginForm.valid) {
      this.loginButtonClicked.emit({
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value
      });

    }
  }
}
