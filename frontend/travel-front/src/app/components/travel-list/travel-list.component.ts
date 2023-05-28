import { Component, OnInit } from '@angular/core';
import { ITravel } from 'src/app/models/travel.model';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit{

  travels: ITravel[] = [
    {
      id: 0,
      local:         'Casa do André',
      vagas:         8,
      local_partida: 'Universidade Adventista de São Paulo',
      hora_partida:  '23:00',
      hora_volta:    'Sem hora',
      imagem_1:      'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2:      'Lorem ipsum',
      imagem_3:      'Lorem ipsum',
    },

    {
      id: 1,
      local:         'Lorem ipsum',
      vagas:         1,
      local_partida: 'Lorem ipsum',
      hora_partida:  'Lorem ipsum',
      hora_volta:    'Lorem ipsum',
      imagem_1:      'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2:      'Lorem ipsum',
      imagem_3:      'Lorem ipsum',
    },

    {
      id: 2,
      local:         'Lorem ipsum',
      vagas:         6,
      local_partida: 'Lorem ipsum',
      hora_partida:  'Lorem ipsum',
      hora_volta:    'Lorem ipsum',
      imagem_1:      'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2:      'Lorem ipsum',
      imagem_3:      'Lorem ipsum',
    },

    {
      id: 3,
      local:         'Lorem ipsum',
      vagas:         7,
      local_partida: 'Lorem ipsum',
      hora_partida:  'Lorem ipsum',
      hora_volta:    'Lorem ipsum',
      imagem_1:      'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2:      'Lorem ipsum',
      imagem_3:      'Lorem ipsum',
    },

    {
      id: 4,
      local:         'Lorem ipsum',
      vagas:         7,
      local_partida: 'Lorem ipsum',
      hora_partida:  'Lorem ipsum',
      hora_volta:    'Lorem ipsum',
      imagem_1:      'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2:      'Lorem ipsum',
      imagem_3:      'Lorem ipsum',
    },
    {
      id: 5,
      local:         'Lorem ipsum',
      vagas:         7,
      local_partida: 'Lorem ipsum',
      hora_partida:  'Lorem ipsum',
      hora_volta:    'Lorem ipsum',
      imagem_1:      'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2:      'Lorem ipsum',
      imagem_3:      'Lorem ipsum',
    },
    {
      id: 6,
      local:         'Lorem ipsum',
      vagas:         7,
      local_partida: 'Lorem ipsum',
      hora_partida:  'Lorem ipsum',
      hora_volta:    'Lorem ipsum',
      imagem_1:      'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2:      'Lorem ipsum',
      imagem_3:      'Lorem ipsum',
    },
    {
      id: 7,
      local:         'Lorem ipsum',
      vagas:         7,
      local_partida: 'Lorem ipsum',
      hora_partida:  'Lorem ipsum',
      hora_volta:    'Lorem ipsum',
      imagem_1:      'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2:      'Lorem ipsum',
      imagem_3:      'Lorem ipsum',
    }
  ];

  constructor () {}

  ngOnInit(): void{
    this.travels.push()
  }
}
