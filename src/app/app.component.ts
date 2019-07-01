import { Component } from '@angular/core';
import { LoginService } from './core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Video Share';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  isUserLoggedIn(): boolean {
    console.log('In isUserLoggedIn ' + this.loginService.getUserLoggedIn());
    return this.loginService.getUserLoggedIn();
  }

  logout() {
    this.loginService.setUserLoggedIn(false);
    this.router.navigateByUrl('/login');
  }
}
