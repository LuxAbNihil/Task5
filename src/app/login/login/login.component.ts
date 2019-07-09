import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataProviderService } from '../../core/services/data-provider/data-provider.service';
import { Login } from '../../models/login';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login/login.service';
import { UserAndVideoListContainer } from '../../models/userAndVideoListContainer';
import { TokenParams } from '../../classes/token-params';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: Login;
  userAndVideoListContainer: UserAndVideoListContainer;
  tokenParams: TokenParams;

  username = '';
  password = '';
  validationMessage = 'This field is required';
  invalidLoginMessage = 'Login attempt failed, please try again';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private dataProviderService: DataProviderService,
    private localStorageService: LocalStorageService
  ) {
    this.loginForm = formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }
  onSubmit(login) {
    this.loginService.login(login)
      .subscribe(response => {
          console.log(response);
          console.log(login.username);
          this.localStorageService.setAuthorizationData(response);
          this.fetchUserAndVideoListContainer(response, login.username);
        });
    }

    fetchUserAndVideoListContainer(token: String, username: String) {
      this.dataProviderService.getUserAndVideoListContainer(token, username)
      .subscribe(response1 => {
        if (response1.users.length === 0) {
          this.loginForm.reset();
          this.loginService.setUserLoggedIn(false);
        } else {
          this.loginService.setCurrentUser(username);
          this.loginService.setUserLoggedIn(true);
          this.router.navigateByUrl('/home');
        }
      });
    }

    checkIfValid(fieldName: string): Boolean {
      const isValid =  this.loginForm.get(fieldName).valid;
      return isValid;
    }

    checkIfTouched(fieldName: string): Boolean {
      const wasTouched = this.loginForm.get(fieldName).touched;
      return wasTouched;
    }

    isFormValid(): Boolean {
      const isValid = this.loginForm.valid;
      return isValid;
    }

    ngOnInit() {}


}
