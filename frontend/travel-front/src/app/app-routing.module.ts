import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelListComponent } from './components/travel-list/travel-list.component';
import { TravelPageComponent } from './components/travel-page/travel-page.component';

const routes: Routes = [
  {
    path: '',
    component: TravelListComponent
  },
  {
    path: 'travel/',
    component: TravelListComponent
  },
  {
    path: 'travel/view/:id',
    component: TravelPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
