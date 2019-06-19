import { Component, OnInit } from '@angular/core';;
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { DataProviderService } from '../../services/data-provider/data-provider.service';
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

  ngOnInit() {
  }

}
