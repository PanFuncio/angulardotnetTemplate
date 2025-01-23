import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})

export class ForecastComponent {
  public forecasts: WeatherForecast[] = [];

    constructor(private http: HttpClient) {}
  
    ngOnInit() {
      this.getForecasts();
    }
  
    getForecasts() {
      this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
        (result) => {
          this.forecasts = result;
        },
        (error) => {
          console.error(error);
        }
      );
    }
}
