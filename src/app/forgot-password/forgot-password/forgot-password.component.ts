import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../../core/services/forgot-password/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  email = '';
  validationMessage = 'Valid Email Required';
  constructor(
    private formBuilder: FormBuilder,
    private forgotPasswordService: ForgotPasswordService
  ) {
    this.forgotPasswordForm = formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  checkIfValid(email: string): boolean {
    return this.forgotPasswordForm.get(email).valid;
  }

  checkIfTouched(email: string): boolean {
    return this.forgotPasswordForm.get(email).touched;
  }

  isFormValid(): boolean {
    return this.forgotPasswordForm.valid;
  }
  onSubmit(email) {
    this.forgotPasswordService.submitRequestForEmailToken(email);
  }

  ngOnInit() {
  }

}
