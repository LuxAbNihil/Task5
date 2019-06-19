import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataProviderService } from '../../services/data-provider/data-provider.service';
import { Login } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: Login;

  username = '';
  password = '';
  validationMessage = 'This field is required';

  constructor(
    private formBuilder: FormBuilder,
    private dataProviderService: DataProviderService,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }
  onSubmit(login) {
    this.dataProviderService.login(login)
      .then(() => this.router.navigateByUrl('/home'));

  }
  ngOnInit(){}

}
