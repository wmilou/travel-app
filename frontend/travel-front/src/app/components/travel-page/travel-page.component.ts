import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITravel } from 'src/app/models/travel.model';

@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.css']
})
export class TravelPageComponent {
  travelDetails: ITravel = {
    id: 0,
    local:         '',
    vagas:         0,
    local_partida: '',
    hora_partida:  '',
    hora_volta:    '',
    imagem_1:      '',
    imagem_2:      '',
    imagem_3:      '',

  }
  // constructor (private route: ActivatedRoute, private travel: ITravel, private router: Router){}
  
  
}
