import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginError = false;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  async onSubmit() {
    this.loginForm.markAllAsTouched();
    this.isLoading = true;
    try {
      await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
      this.router.navigate(['/']);
    } catch (error: any) {
      this.loginError = true;
    } finally {
      this.isLoading = false;
    }
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }
}
