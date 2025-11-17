import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

// Questo è il file di avvio dell'applicazione Angular
// bootstrapApplication è la funzione che "accende" l'app Angular
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); // Gestisce eventuali errori di avvio