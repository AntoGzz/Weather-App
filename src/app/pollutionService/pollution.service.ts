import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PollutionService {

  apiKey: string = 'f53288bbef4f9ece6389776a192f13a5';
  conlat = '&lat=';
  conlon = '&lon=';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/air_pollution?appid=${this.apiKey}&q=`;
  }

  getPollution(lat: string, lon: string) {
    return this.http.get(`${this.URI}${this.conlat}${lat}${this.conlon}${lon}`);
  }
}
