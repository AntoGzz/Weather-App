import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  apiKey: string = 'f53288bbef4f9ece6389776a192f13a5';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string) {
    return this.http.get(`${this.URI}${cityName}`);
  }
  
}