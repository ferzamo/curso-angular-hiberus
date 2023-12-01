import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { WeatherApiService } from '../../shared/services/weather-api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public cities;
  public weatherData;
  constructor(
    public authService: AuthService,
    private _weatherApiService: WeatherApiService
  ) {}
  ngOnInit(): void {
    // this.getCities();
  }

  getCities() {
    // Llama a la función para obtener la lista de ciudades con el nombre proporcionado
    this._weatherApiService.getCities('Madrid').subscribe(
      (data) => {
        this.cities = data;
      },
      (error) => {
        console.error('Error fetching city data:', error);
      }
    );
  }
}
