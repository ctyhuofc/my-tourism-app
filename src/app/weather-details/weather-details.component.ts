import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherComponent } from '../weather/weather.component';
import { GetweatherService } from '../getweather.service';
import {CitiesWeather} from '../cities/cities-info-data'
import { cityinfo, Weather } from '../cities/cities-info';
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  color = "yellow"
  weather:Weather | undefined
  @Input()
  weatherData:any
  constructor(private route:ActivatedRoute) { //adding get weather service to try to integrate links

   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const weatherNameFromRoute = String(routeParams.get('weatherName'));
 
    this.weather = CitiesWeather.find(weather => weather.name === weatherNameFromRoute)
  }

}
