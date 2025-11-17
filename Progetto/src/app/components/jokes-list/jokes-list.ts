import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeService } from '../../services/joke';

// Componente per la pagina che mostra una lista di 10 barzellette
@Component({
  selector: 'app-jokes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jokes-list.html',
  styleUrls: ['./jokes-list.css']
})
export class JokesListComponent implements OnInit {
  // PROPRIETÀ DEL COMPONENTE:
  
  // Array che conterrà le 10 barzellette ricevute dall'API
  barzellette: any[] = [];
  
  // Flag per indicare se siamo in fase di caricamento
  inCaricamento = true;
  
  // Variabile per memorizzare eventuali messaggi di errore
  errore: string | null = null;

  // COSTRUTTORE - inietta il servizio JokeService
  constructor(private jokeService: JokeService) {}

  // METODO LIFECYCLE - chiamato automaticamente all'inizializzazione del componente
  ngOnInit() {
    // All'avvio del componente, carica immediatamente 10 barzellette
    this.caricareDieciBarzellette();
  }

  // METODO per caricare 10 barzellette casuali dall'API
  caricareDieciBarzellette() {
    // Reset dello stato prima di iniziare il caricamento
    this.inCaricamento = true;  // Attiva lo stato di caricamento
    this.errore = null;         // Pulisci eventuali errori precedenti

    // Chiama il servizio per ottenere 10 barzellette
    this.jokeService.ottenereDieciBarzellette().subscribe({
      // CALLBACK DI SUCCESSO - chiamata quando i dati arrivano correttamente
      next: (dati: any) => {
        // Assegna le barzellette ricevute alla proprietà del componente
        this.barzellette = dati;
        // Disattiva lo stato di caricamento
        this.inCaricamento = false;
      },
      // CALLBACK DI ERRORE - chiamata se qualcosa va storto
      error: (errore) => {
        // Imposta il messaggio di errore
        this.errore = 'Errore nel caricamento delle barzellette';
        // Disattiva comunque il caricamento
        this.inCaricamento = false;
      }
    });
  }

  // METODO per ricaricare le barzellette (usato dal pulsante "Ricarica")
  ricaricareBarzellette() {
    this.caricareDieciBarzellette();
  }

  // METODO per mostrare/nascondere la battuta di una singola barzelletta
  // Riceve come parametro la barzelletta specifica su cui abbiamo cliccato
  rivelareBattuta(barzelletta: any) {
    // Inverte lo stato di mostraBattuta per questa barzelletta specifica
    // Se era true diventa false, se era false diventa true
    barzelletta.mostraBattuta = !barzelletta.mostraBattuta;
  }
}