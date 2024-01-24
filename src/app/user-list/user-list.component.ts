import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  randomUser: any ;
  weatherData: any;
  latitude!: number;
  longitude!: number;
  currentTemperature!: number;
  maxTemperature!: number;
  minTemperature!: number;


  constructor(private userService: UserService, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.userService.getRandomUser().subscribe(data => {
      this.randomUser = data.results[0];
      this.latitude = +this.randomUser.location.coordinates.latitude;
      this.longitude = +this.randomUser.location.coordinates.longitude;
      console.log(this.randomUser)
      this.weatherService.getWeather(this.latitude, this.longitude).subscribe(weatherData => {
        this.weatherData = weatherData;
        console.log(this.weatherData)
        const arrayTemperature = this.weatherData.hourly.temperature_2m;
        this.currentTemperature = arrayTemperature[arrayTemperature.length -1]
        this.maxTemperature = Math.max(...arrayTemperature);
        this.minTemperature = Math.min(...arrayTemperature);
      })
    })
    

    // const latitude = -19.7962;
    // const longitude = 178.2180;
    // console.log(this.latitude)
    // if (!isNaN(this.latitude) && !isNaN(this.longitude)) {
    //   this.weatherService.getWeather(this.latitude, this.longitude).subscribe(weatherData => {
    //     this.weatherData = weatherData;
    //     console.log(this.weatherData)
    //   });
    // } else {
    //   console.error('Latitude or longitude is not a valid number. Unable to make weather API request.');
    // }

  }
}
