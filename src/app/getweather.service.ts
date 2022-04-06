import { Injectable } from '@angular/core';
import { CitiesWeather } from './cities/cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {
  getWeather(){
    return CitiesWeather
  }
  constructor() { }
}
