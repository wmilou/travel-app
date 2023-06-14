import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPayment } from 'src/app/models/payment.model';
import { ITravel } from 'src/app/models/travel.model';
import { TravelService } from 'src/app/services/travel/travel.service';

@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.css']
})
export class TravelPageComponent implements OnInit {
  travel: ITravel = {
    id_viagem: 0,
    local:         '',
    vagas:         0,
    local_partida: '',
    hora_partida:  '',
    hora_volta:    '',
    imagem_1:      '',
    imagem_2:      '',
    imagem_3:      '',

  }

  isVisible: boolean = false;
  qtdViagem: string = '1';
  // constructor (private route: ActivatedRoute, private travel: ITravel, private router: Router){}
  constructor (private travelService: TravelService, private route: ActivatedRoute) {}


  buyTravel(){
    const payment:IPayment = {
      formaDePagamento: {
        descricao: "cartão"
      },
      qtdVagas: parseInt(this.qtdViagem)
    }
    this.route.paramMap.subscribe({
      next: (params) => {
        const id_viagem = params.get('id_viagem');
        const id_client = 1;

        if(id_viagem){
          this.travelService.buyTravel(parseInt(id_viagem), id_client, payment).subscribe({
            next: (travel) => {
              console.log(travel); 
              if(travel){
                this.changeView();
              }
            },
            error: (response) => {console.log(response)}
          })
        }
      }
    })
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id_viagem = params.get('id_viagem');

        if(id_viagem){
          this.travelService.getSingleTravel(parseInt(id_viagem)).subscribe({
            next: (travel) => {
              this.travel = travel; 
              console.log(travel); 
            },
            error: (response) => {console.log(response)}
          })
        }
      }
    })
  }

  changeView(){
    this.isVisible = !this.isVisible;
  }
  
}
