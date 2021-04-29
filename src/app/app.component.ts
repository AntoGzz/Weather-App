import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weatherService/weather.service';
import { PollutionService } from './pollutionService/pollution.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  location = { cityName: 'Bogotá'};
  coordinates = { lat: '-74.0817', lon: '4.6097'};
  weather = undefined;
  coord = undefined;

  constructor(private weatherService: WeatherService , private pollutionService: PollutionService ) { }

  ngOnInit() {
    this.getWeather(this.location.cityName);
    this.getPollution(this.coordinates.lat, this.coordinates.lon);
  }

  getWeather(cityName: string) {
    this.weatherService
      .getWeather(cityName)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  getPollution(lat: string, lon: string) {
    this.pollutionService
      .getPollution(lat,lon)
      .subscribe(
        res => {
          console.log(res);
          this.coord = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value);

      // cityName.value = '';
    } else {
      alert('Please. Insert some values');
    }
    // cityName.focus();
    return false;
  }

  submitCoordinates(lat: HTMLInputElement, lon: HTMLInputElement) {
    if (lat.value && lon.value) {
      this.getPollution(lat.value, lon.value);

      // lat.value = '';
      // lon.value = '';
    } else {
      alert('Please. Insert some values');
    }
    // lat.focus();
    return false;
  }

}
