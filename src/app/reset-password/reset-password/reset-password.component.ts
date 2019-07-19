import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordReset } from '../../models/passwordReset';
import { ResetPasswordService } from '../../core/services/reset-password/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  passwordResetForm: FormGroup;
  passwordReset: PasswordReset;
  password = '';
  confirmPassword = '';
  passwordValidation = false;

  requiredMessage = 'This field is required';
  passwordsDontMatchMessage = 'Passwords Don\'t Match';

  constructor(
    private formBuilder: FormBuilder,
    private resetPasswordService: ResetPasswordService
  ) {
    this.passwordResetForm = formBuilder.group({
      'password': [null, Validators.required],
      'confirmPassword': [null, Validators.required],
      'token': [null, Validators.required]
    });

  }

  // checks if a given field is valid
  checkIfValid(fieldName: string): Boolean {
    const isValid =  this.passwordResetForm.get(fieldName).valid;
    return isValid;
  }

  // checks if a given field has been touched
  checkIfTouched(fieldName: string): Boolean {
    const wasTouched = this.passwordResetForm.get(fieldName).touched;
    return wasTouched;
  }

  doPasswordsMatch(password: string, confirmPassword: string) {
    console.log('Password is: ' + password + '.');
    console.log('Confirm Password is: ' + confirmPassword + '.');
    if (password === confirmPassword) {
      this.passwordValidation = true;
      return true;
    }
    this.passwordValidation = false;
    return false;
  }

  isFormValid(): Boolean {
    const isValid = this.passwordResetForm.valid;
    // this is necessary to display divs correctly

    const passwordsMatch = this.passwordValidation;
    console.log(passwordsMatch);
    console.log('IsValid is: ' + isValid);
    return (isValid && passwordsMatch);
  }

  onSubmit(passwordReset) {
    const response = this.resetPasswordService.submit(passwordReset);
    this.passwordResetForm.reset();
    console.log(response);
  }
  ngOnInit() {
  }

}
