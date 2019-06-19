import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import { DataProviderService } from './services/data-provider/data-provider.service';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { LoginService } from './services/login/login.service';
import { AuthGuard } from './guards/authguard/auth.guard';
import { UpdateService } from './services/update-service/update.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UploadComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    DataProviderService,
    LoginService,
    UpdateService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
