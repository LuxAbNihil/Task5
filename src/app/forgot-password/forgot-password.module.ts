import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordRoutingModule } from './forgot-password.routing';
import { ForgotPasswordService } from '../core/services/forgot-password/forgot-password.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ForgotPasswordRoutingModule
  ],
  declarations: [
    ForgotPasswordComponent
  ],
  providers: [
    ForgotPasswordService
  ]
})
export class ForgotPasswordModule { }
