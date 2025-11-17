import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeService } from '../../services/joke';

// Componente per la pagina delle categorie di barzellette
// Permette di selezionare una categoria e vedere le barzellette di quel tipo
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css']
})
export class CategoriesComponent implements OnInit {
  // PROPRIETÀ DEL COMPONENTE:
  
  // Array che conterrà i nomi delle categorie disponibili (es: ['programming', 'general'])
  categorie: string[] = [];
  
  // Array che conterrà le barzellette della categoria selezionata
  barzellette: any[] = [];
  
  // Stringa che memorizza la categoria attualmente selezionata
  categoriaSelezionata: string = '';
  
  // Flag per il caricamento delle categorie
  inCaricamento = true;
  
  // Flag per il caricamento delle barzellette (separato dal caricamento categorie)
  inCaricamentoBarzellette = false;
  
  // Variabile per memorizzare eventuali errori
  errore: string | null = null;

  // COSTRUTTORE - inietta il servizio JokeService
  constructor(private jokeService: JokeService) {}

  // METODO LIFECYCLE - chiamato all'inizializzazione del componente
  ngOnInit() {
    // All'avvio, carica prima la lista delle categorie disponibili
    this.caricareCategorie();
  }

  // METODO per caricare la lista delle categorie dall'API
  caricareCategorie() {
    this.inCaricamento = true;  // Attiva il loading per le categorie
    this.errore = null;         // Reset errori

    // Chiama il servizio per ottenere i tipi di barzellette
    this.jokeService.ottenereTipiBarzellette().subscribe({
      next: (dati: any) => {
        // Salva le categorie ricevute dall'API
        this.categorie = dati;
        this.inCaricamento = false; // Disattiva il loading
        
        // Se ci sono categorie disponibili, seleziona automaticamente la prima
        if (this.categorie.length > 0) {
          this.selezionareCategoria(this.categorie[0]);
        }
      },
      error: (errore) => {
        this.errore = 'Errore nel caricamento delle categorie';
        this.inCaricamento = false;
      }
    });
  }

  // METODO per selezionare una categoria e caricare le sue barzellette
  // Viene chiamato quando l'utente clicca su un pulsante categoria
  selezionareCategoria(categoria: string) {
    // Aggiorna la categoria selezionata
    this.categoriaSelezionata = categoria;
    // Attiva il loading per le barzellette
    this.inCaricamentoBarzellette = true;
    this.errore = null; // Reset errori

    // Chiama il servizio per ottenere barzellette della categoria specificata
    this.jokeService.ottenereBarzellettePerTipo(categoria).subscribe({
      next: (dati: any) => {
        // Salva le barzellette ricevute
        this.barzellette = dati;
        this.inCaricamentoBarzellette = false;
      },
      error: (errore) => {
        this.errore = `Errore nel caricamento delle barzellette di ${categoria}`;
        this.inCaricamentoBarzellette = false;
      }
    });
  }

  // METODO per mostrare/nascondere la battuta di una barzelletta specifica
  rivelareBattuta(barzelletta: any) {
    barzelletta.mostraBattuta = !barzelletta.mostraBattuta;
  }
}