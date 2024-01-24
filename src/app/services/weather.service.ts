import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://archive-api.open-meteo.com/v1/archive';

  constructor(private http: HttpClient) { }

  getWeather(latitude: number, longitude: number): Observable<any> {
    console.log(latitude)
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&start_date=2024-01-06&end_date=2024-01-20&hourly=temperature_2m,precipitation,rain,snowfall,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high`;
    console.log(url)
    // const url = 'https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2024-01-06&end_date=2024-01-20&hourly=temperature_2m,precipitation,rain,snowfall,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high';
    // https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2024-01-06&end_date=2024-01-20&hourly=temperature_2m,precipitation,rain,snowfall,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high
    return this.http.get(url);
  }
  // getWeather(latitude: number, longitude: number): Observable<any> {
  //   const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`;
  //   return this.http.get(url);
  // }
  // getWeather(latitude: number, longitude: number): Observable<any> {
  //   const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`;
  //   return this.http.get(url);
  // }
}
