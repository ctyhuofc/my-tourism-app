import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from '../getcities.service';
import { Citiesinfo } from './cities-info-data';
import { cityinfo } from './cities-info';
import { compileFactoryFunction } from '@angular/compiler';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
cities:any
color:any
constructor(private _cities: GetcitiesService){}

ngOnInit(): void {
  this.cities=this._cities.getCities()
  this.color=this.colorit();
}
colorit(){
  for (var i = 0;i<this.cities.length;i++){
    if (this.cities[i].attractionSites.length<1){
      return false
    }
  }
  return true
}
}
