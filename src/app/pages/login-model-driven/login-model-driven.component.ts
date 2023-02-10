import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-model-driven',
  templateUrl: './login-model-driven.component.html',
  styleUrls: ['./login-model-driven.component.scss']
})
export class LoginModelDrivenComponent {
  loginForm: FormGroup;
  forbiddenPasswords = ['1234', 'azerty'];

  constructor() {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, this.forbiddenPasswordsValidator.bind(this)]),
      }),
      comment: new FormControl(null),
    });
  }

  forbiddenPasswordsValidator(control: FormControl): { forbidden: boolean } | null {
    if (!this.forbiddenPasswords.includes(control.value)) return null;
    return {
      forbidden: true
    };
  }

  onSubmit() {
    console.log(this.loginForm);
  }

  get password() {
    return this.loginForm.get('userData.password') as FormControl;
  }

  get email() {
    return this.loginForm.get('userData.email') as FormControl;
  }

}
