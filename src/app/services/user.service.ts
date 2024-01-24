import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private randomUserApiUrl = 'https://randomuser.me/api/'
  private weatherApiUrl = 'https://archive-api.open-meteo.com/v1/archive';

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<any> {
    return this.http.get(this.randomUserApiUrl)
  }
  getWeatherByCoordinates(latitude: number, longitude: number): Observable<any> {
    const url = `${this.weatherApiUrl}?latitude=${latitude}&longitude=${longitude}&start_date=2024-01-06&end_date=2024-01-20&hourly=temperature_2m,precipitation,rain,snowfall,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high`;
    // https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2024-01-06&end_date=2024-01-20&hourly=temperature_2m,precipitation,rain,snowfall,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high
    return this.http.get(url);
  }

  

  // getDataForUser(): Observable<any> {
  //   // Отримайте дані випадкового користувача
  //   const randomUser$ = this.getRandomUser();

  //   // Передайте дані випадкового користувача для отримання погоди
  //   return forkJoin([randomUser$]).pipe(
  //     switchMap(([randomUser]) => {
  //       const latitude = randomUser.results[0].location.coordinates.latitude;
  //       const longitude = randomUser.results[0].location.coordinates.longitude;
  //       return this.getWeatherByCoordinates(latitude, longitude);
  //     })
  //   );
  // }
}
