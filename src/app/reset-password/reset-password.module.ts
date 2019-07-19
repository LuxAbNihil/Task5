import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordRoutingModule } from './reset-password.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResetPasswordService } from '../core/services/reset-password/reset-password.service';

@NgModule({
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ResetPasswordService
  ],
  declarations: [
    ResetPasswordComponent
  ]
})
export class ResetPasswordModule { }
