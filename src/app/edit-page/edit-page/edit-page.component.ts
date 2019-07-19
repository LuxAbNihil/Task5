import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Update } from '../../models/update';
import { DataProviderService } from '../../core/services/data-provider/data-provider.service';
import { Router } from '@angular/router';
import { UpdateService } from '../../core/services/update-service/update.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  updateForm: FormGroup;
  update: Update;
  userId: number;
  user: User;

  address = '';
  phoneNumber = '';
  email = '';
  username = '';
  phoneNumberValidationMessage =  'Must be 10 numbers only';
  emailValidationMessage = 'Must be a valid email address';


  constructor(
    private formBuilder: FormBuilder,
    private dataProviderService: DataProviderService,
    private updateService: UpdateService,
    private router: Router
  ) {
    this.updateForm = formBuilder.group({
      'address': [null],
      'phoneNumber': [null, Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')])],
      'email': [null, Validators.email]
    });
  }

  onSubmit() {
    console.log(this.updateForm.value);
    this.username = this.updateService.getUserToBeEdited();
    this.user = this.updateForm.value;
    this.user.id = this.updateService.getUserId();
    this.user.username = this.updateService.getUserToBeEdited();
    this.dataProviderService.update(this.user, this.username)
      .then(() => this.router.navigateByUrl('/home'));
  }

  ngOnInit() {
  }

}
