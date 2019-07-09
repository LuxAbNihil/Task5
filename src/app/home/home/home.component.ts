import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProviderService } from '../../core/services/data-provider/data-provider.service';
import { UserAndVideoListContainer } from '../../models/userAndVideoListContainer';
import { LoginService } from '../../core/services/login/login.service';
import { UpdateService } from '../../core/services/update-service/update.service';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userAndVideoListContainer: UserAndVideoListContainer;

  constructor(
    private dataProviderService: DataProviderService,
    private router: Router,
    private loginService: LoginService,
    private updateService: UpdateService,
    private localStorageService: LocalStorageService
  ) {}


  delete(username) {
    this.dataProviderService.delete(username)
      .then(() => this.populateList());
  }

  edit(username, id) {
    this.updateService.setUserToBeEdited(username);
    this.updateService.setUserId(id);
    this.router.navigateByUrl('editPage');
  }

  ngOnInit() {
    this.localStorageService.getAuthorizationData();
    this.populateList();
  }

  populateList() {
    this.dataProviderService.getUserList().then(response => {
      this.userAndVideoListContainer = response;
      console.log(this.userAndVideoListContainer); });
  }

}
