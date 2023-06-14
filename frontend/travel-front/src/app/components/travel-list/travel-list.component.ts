import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITravel } from 'src/app/models/travel.model';
import { TravelService } from 'src/app/services/travel/travel.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit{

  travels: ITravel[] = [];

  constructor (private travelService: TravelService, private router: Router) {}

  ngOnInit(): void{
    this.travelService.getTravel().subscribe({
      next: (travels) => {this.travels = travels; console.log(travels)},
      error: (response) => {console.log(response)}
    })
    this.travels.push()
  }
}
