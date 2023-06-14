import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClient, ILogin } from 'src/app/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseApiUrl = 'http://localhost/api/v1';

  constructor(private http: HttpClient) { }

  clientRegister(client: IClient): Observable<IClient>{
    client.id = 0;
    return this.http.post<IClient>(this.baseApiUrl+'/usuario/usuario', client); 
  }

  clientLogin(client: ILogin): Observable<IClient>{
    var headerOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      body: {
        "email": client.email,
        "senha": client.senha
      }
    }
    return this.http.get<IClient>(this.baseApiUrl+'/usuario/login', headerOptions); 
  }

  
}
