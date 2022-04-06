import { Injectable } from '@angular/core';
import { cityinfo } from './cities/cities-info';
import { Citiesinfo } from './cities/cities-info-data';
@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {
  getCities(){
  return Citiesinfo
}
  constructor() { }
}
