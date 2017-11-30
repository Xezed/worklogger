import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  loginForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(5)] ],
      password: ['', [Validators.required, Validators.minLength(8)] ],
    })
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      result => {
        if (result)
          this.router.navigate(['/']);
        else
          this.invalidLogin = true;
      })
  }
}
