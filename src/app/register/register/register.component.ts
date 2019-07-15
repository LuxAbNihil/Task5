import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn} from '@angular/forms';

import { DataProviderService } from '../../core/services/data-provider/data-provider.service';
import { Register } from '../../models/register';
import { passwordMatches } from './password-matches-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  register: Register;
  username = '';
  password = '';
  confirmPassword = '';
  address = '';
  phoneNumber = '';
  email = '';
  requiredMessage = 'This field is required.';
  passwordsDontMatchMessage = 'Passwords don\'t match.';
  phoneNumberValidationMessage =  'Must be 10 numbers only';
  emailValidationMessage = 'Must be a valid email address';
  passwordValidation: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private dataProviderService: DataProviderService
  ) {

  this.registerForm = formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
      'confirmPassword': [null, Validators.required],
      'address': [null],
      'phoneNumber': [null, Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')])],
      'email': [null, Validators.email]
    },
      {validator: passwordMatches([this.password, this.confirmPassword])},
    );

  }

  onSubmit(register)  {
    this.dataProviderService.register(register);
    this.registerForm.reset();
  }

  // checks if a given field has a valid value
  checkIfValid(fieldName: string): Boolean {
    const isValid =  this.registerForm.get(fieldName).valid;
    return isValid;
  }

  // checks if a give field has been touched
  checkIfTouched(fieldName: string): Boolean {
    const wasTouched = this.registerForm.get(fieldName).touched;
    return wasTouched;
  }

  doPasswordsMatch(password: string, confirmPassword: string) {
    console.log('Password is: ' + password + '.');
    console.log('Confirm Password is: ' + confirmPassword + '.');
    if (null === passwordMatches([password, confirmPassword])) {
      this.passwordValidation = true;
      return true;
    }
    this.passwordValidation = false;
    return false;
  }

  isFormValid(): Boolean {
    const isValid = this.registerForm.valid;
    const passwordsMatch = this.passwordValidation;
    return (isValid && passwordsMatch);
  }

  ngOnInit() {
  }

}
