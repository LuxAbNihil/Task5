import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './guards/authguard/auth.guard';
import { DataProviderService } from './services/data-provider/data-provider.service';
import { LoginService } from './services/login/login.service';
import { UpdateService } from './services/update-service/update.service';
import { UploadService } from './services/upload-service/upload.service';
import { AuthInterceptor } from './interceptors/AuthInterceptor';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FileUploadModule
  ],
  declarations: [],
  exports: [
    CommonModule
  ],
  providers: [
    DataProviderService,
    LoginService,
    UpdateService,
    UploadService,
    LocalStorageService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
