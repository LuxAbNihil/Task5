import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { UploadRoutingModule } from './upload.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UploadService } from '../core/services/upload-service/upload.service';

@NgModule({
  imports: [
    CommonModule,
    UploadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UploadComponent
  ],
  providers: [
    UploadService
  ]
})
export class UploadModule { }
