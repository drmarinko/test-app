import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserameValidators } from '../common/validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    'email': new FormControl('', [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(30),
        UserameValidators.canNotContainSpace
      ],
      UserameValidators.unique),
    'password': new FormControl('', Validators.required),
    'address': new FormGroup({
      'city': new FormControl
    }) 
  });
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  get f() {
    return this.form.controls;
  }

  login() {
    console.log(2);
    this.submitted = true;
    if (this.form.invalid) return;

    let isValid = false;
    if (!isValid) {
      this.form.setErrors({
        invalidLogin: true
      });
    }
  }
}
