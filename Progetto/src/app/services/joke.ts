import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private baseUrl = 'https://official-joke-api.appspot.com';

  constructor(private http: HttpClient) {}

  getRandomJoke() {
    return this.http.get(`${this.baseUrl}/random_joke`);
  }

  getTenJokes() {
    return this.http.get(`${this.baseUrl}/random_ten`);
  }

  getJokesByType(type: string) {
    return this.http.get(`${this.baseUrl}/jokes/${type}/ten`);
  }

  getJokeTypes() {
    return this.http.get(`${this.baseUrl}/types`);
  }
}