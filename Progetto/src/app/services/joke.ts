import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private urlBase = 'https://official-joke-api.appspot.com';

  constructor(private http: HttpClient) {}

  ottenereBarzellettaCasuale() {
    return this.http.get(`${this.urlBase}/random_joke`);
  }

  ottenereDieciBarzellette() {
    return this.http.get(`${this.urlBase}/random_ten`);
  }

  ottenereBarzellettePerTipo(tipo: string) {
    return this.http.get(`${this.urlBase}/jokes/${tipo}/ten`);
  }

  ottenereTipiBarzellette() {
    return this.http.get(`${this.urlBase}/types`);
  }
}