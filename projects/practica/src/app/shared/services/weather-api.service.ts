// weather-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private apiKey = '4b4bb15b5890de11197953937b9d54f0';
  private apiUrl = ' https://api.openweathermap.org/data/2.5/';
  private apiUrl2 = 'https://api.openweathermap.org/geo/1.0';

  constructor(private http: HttpClient) {}

  getCities(city: string): Observable<any[]> {
    const url = `${this.apiUrl2}/direct?q=${city}&limit=5&appid=${this.apiKey}`;
    return this.http.get<any[]>(url);
  }

  getWeatherByLatLon(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}/onecall?lat=${lat}&lon=${lon}&include=hourly,daily&lang=es_es&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  /*
  getWeather(city: string): Observable<any> {
   const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=4b4bb15b5890de11197953937b9d54f0`;
    return this.http.get(url);
  }*/
}
