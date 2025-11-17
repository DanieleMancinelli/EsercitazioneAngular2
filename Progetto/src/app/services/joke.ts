import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Un servizio in Angular è una classe che fornisce funzionalità riutilizzabili
// Viene iniettata nei componenti che ne hanno bisogno
@Injectable({
  providedIn: 'root', // Questo servizio è disponibile in tutta l'applicazione
})
export class JokeService {
  // URL base dell'API delle barzellette
  private urlBase = 'https://official-joke-api.appspot.com';

  // Il costruttore riceve HttpClient tramite dependency injection
  // HttpClient è il servizio di Angular per fare chiamate HTTP
  constructor(private http: HttpClient) {}

  // Metodo per ottenere una barzelletta casuale dall'API
  ottenereBarzellettaCasuale() {
    // http.get fa una richiesta GET all'API e restituisce un Observable
    // Gli Observable sono flussi di dati asincroni
    return this.http.get(`${this.urlBase}/random_joke`);
  }

  // Metodo per ottenere 10 barzellette casuali
  ottenereDieciBarzellette() {
    return this.http.get(`${this.urlBase}/random_ten`);
  }

  // Metodo per ottenere barzellette di un tipo specifico
  // Il parametro 'tipo' può essere: 'programming', 'general', 'knock-knock', ecc.
  ottenereBarzellettePerTipo(tipo: string) {
    return this.http.get(`${this.urlBase}/jokes/${tipo}/ten`);
  }

  // Metodo per ottenere la lista dei tipi di barzellette disponibili
  ottenereTipiBarzellette() {
    return this.http.get(`${this.urlBase}/types`);
  }
}