import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/authguard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register',
    loadChildren: 'app/register/register.module#RegisterModule'},
  {path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'home', canActivate: [AuthGuard],
    loadChildren: 'app/home/home.module#HomeModule'},
  {path: 'upload', canActivate: [AuthGuard],
    loadChildren: 'app/upload/upload.module#UploadModule'},
  {path: 'editPage', canActivate: [AuthGuard],
    loadChildren: 'app/edit-page/edit-page.module#EditPageModule'},
  {path: 'search',
    loadChildren: 'app/search/search.module#SearchModule'},
  {path: 'forgotPassword',
    loadChildren: 'app/forgot-password/forgot-password.module#ForgotPasswordModule'},
  {path: 'resetPassword',
    loadChildren: 'app/reset-password/reset-password.module#ResetPasswordModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
