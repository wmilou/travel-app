import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  currentPage: string = 'login';

  changeView(page: string){
    this.currentPage = page;
  }
}
