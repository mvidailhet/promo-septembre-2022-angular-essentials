import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-login-model-driven',
  templateUrl: './login-model-driven.component.html',
  styleUrls: ['./login-model-driven.component.scss']
})
export class LoginModelDrivenComponent {
  loginForm: FormGroup;
  forbiddenPasswords = ['1234', 'azerty'];
  forbiddenEmails = ['toto@gmail.com'];

  constructor() {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailValidator.bind(this)),
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

  forbiddenEmailValidator(control: AbstractControl): Observable<{ forbidden: boolean } | null> {
    const promise = new Promise<{ forbidden: boolean } | null>((resolve) => {
      setTimeout(() => {
        if (!this.forbiddenEmails.includes(control.value)) {
          resolve(null);
          return;
        }
        resolve({ forbidden: true });
      }, 2000);
    });
    return from(promise);
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
