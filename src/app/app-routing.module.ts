import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { HomeComponent } from './home/home.component';
import { TechIdeasComponent } from './tech-ideas/tech-ideas.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"cities", component: CitiesComponent},
  {path:"weather", component: WeatherComponent},
  {path: 'weather/:weatherName', component: WeatherDetailsComponent},
  {path:"techideas", component: TechIdeasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// "name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumnN/:autumnM/:visitFrom/:visitTo"