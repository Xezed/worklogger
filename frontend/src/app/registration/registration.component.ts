import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {PasswordValidation} from "./password.validator";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService) {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(5)] ],
      password: ['', [Validators.required, Validators.minLength(8)] ],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)] ],
    },  {
        validator: PasswordValidation.MatchPassword
    })
  }

  onSubmit() {
    this.authService.registration(this.registrationForm.value).subscribe(
      result => {
        if (result)
          this.router.navigate(['/']);
      })
  }
}
