import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITravel } from 'src/app/models/travel.model';
import { IPayment } from 'src/app/models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  baseApiUrl = 'http://localhost/api/v1';

  constructor(private http: HttpClient) { }

  getTravel(): Observable<ITravel[]>{
    return this.http.get<ITravel[]>(this.baseApiUrl+'/viagem/viagem');
  }


  getSingleTravel(id_viagem: number): Observable<ITravel>{
    const header = new HttpHeaders({
      'id-viagem': id_viagem
    });
    
    return this.http.get<ITravel>(this.baseApiUrl+'/viagem/viagem/buscarUmaViagem', {headers: header});
  }

  buyTravel(id_viagem:number, id_client: number, payment: IPayment){
    const header = new HttpHeaders({
      'id-viagem': id_viagem,
      'id-usuario': id_client
    });

    return this.http.post(this.baseApiUrl+'/viagem/viagem/comprarViagem', payment, {headers: header})
  }
}
