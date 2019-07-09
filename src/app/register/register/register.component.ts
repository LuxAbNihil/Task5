import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { DataProviderService } from '../../core/services/data-provider/data-provider.service';
import { Register } from '../../models/register';

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
  address = '';
  phoneNumber = '';
  email = '';
  titleAlert = 'This field is required.';
  phoneNumberValidationMessage =  'Must be 10 numbers only';
  emailValidationMessage = 'Must be a valid email address';

  constructor(
    private formBuilder: FormBuilder,
    private dataProviderService: DataProviderService
  ) {

  this.registerForm = formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
      'address': [null],
      'phoneNumber': [null, Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')])],
      'email': [null, Validators.email]
    });

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

  isFormValid(): Boolean {
    const isValid = this.registerForm.valid;
    return isValid;
  }

  ngOnInit() {
  }

}
