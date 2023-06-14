import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IClient, ILogin } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit{
  currentPage: string = 'login';

  clientRequest: IClient = {
    id: 0,
    nome: '',
    dat_nasc: '',
    rg: '00.000.000-00',
    cpf_cnpj: '000.000.000-00',
    telefone: '',
    email: '',
    senha: '',
  };

  login: ILogin = {
    email: '',
    senha: ''
  };

  constructor(private clientService: ClientService, private router: Router){};

  ngOnInit(): void{}

  clientRegister(){
    this.clientService.clientRegister(this.clientRequest).subscribe({
      next: (client) => {
        this.clientRequest = client; 
        console.log(client);
        this.router.navigate(['/']);
      },
      error: (response) => {console.log(response)}
    })
  }

  clientLogin(){
    this.clientService.clientLogin(this.login).subscribe({
      next: (client) => {
        console.log(client);
        this.clientRequest = client;
      },
      error: (response) => {console.log(response)}
    })
  }



  changeView(page: string){
    this.currentPage = page;
  }
}
