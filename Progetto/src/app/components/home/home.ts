import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeService } from '../../services/joke';

// Componente per la homepage - mostra una barzelletta casuale
@Component({
  selector: 'app-home', // Tag HTML: <app-home></app-home>
  standalone: true,
  imports: [CommonModule], // Importa CommonModule per *ngIf, *ngFor
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  // PROPRIETÀ DEL COMPONENTE:
  
  // Memorizza la barzelletta corrente ricevuta dall'API
  barzelletta: any = null;
  
  // Controlla se mostrare o nascondere la battuta finale
  mostraBattuta = false;
  
  // Indica se siamo in fase di caricamento (mostra spinner)
  inCaricamento = true;
  
  // Memorizza eventuali messaggi di errore
  errore: string | null = null;

  // COSTRUTTORE - riceve il servizio JokeService tramite dependency injection
  constructor(private jokeService: JokeService) {}

  // METODO LIFECYCLE - viene chiamato automaticamente quando il componente viene inizializzato
  ngOnInit() {
    // All'avvio del componente, carica subito una barzelletta
    this.caricareBarzellettaCasuale();
  }

  // METODO per caricare una nuova barzelletta casuale
  caricareBarzellettaCasuale() {
    // Reset dello stato
    this.inCaricamento = true;    // Attiva il loading
    this.mostraBattuta = false;   // Nascondi la battuta
    this.errore = null;           // Reset errori

    // Chiama il servizio per ottenere una barzelletta
    // subscribe() "ascolta" la risposta dell'Observable
    this.jokeService.ottenereBarzellettaCasuale().subscribe({
      // Funzione chiamata quando la richiesta ha successo
      next: (dati: any) => {
        this.barzelletta = dati;      // Salva la barzelletta
        this.inCaricamento = false;   // Disattiva il loading
      },
      // Funzione chiamata quando c'è un errore
      error: (errore) => {
        this.errore = 'Errore nel caricamento della barzelletta';
        this.inCaricamento = false;
      }
    });
  }

  // METODO per rivelare la battuta finale (punchline)
  rivelareBattuta() {
    this.mostraBattuta = true;
  }
}