import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

// Questo file configura l'applicazione Angular
// Invece del vecchio app.module.ts, qui definiamo tutti i provider
export const appConfig: ApplicationConfig = {
  providers: [
    // Provider per il sistema di routing (navigazione tra pagine)
    provideRouter(routes),
    
    // Provider per HttpClient, che ci permette di fare chiamate API
    provideHttpClient()
  ]
};