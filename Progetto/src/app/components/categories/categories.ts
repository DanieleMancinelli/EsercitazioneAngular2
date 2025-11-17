import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeService } from '../../services/joke'; 

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css']
})
export class CategoriesComponent implements OnInit {
  categorie: string[] = [];
  barzellette: any[] = [];
  categoriaSelezionata: string = '';
  inCaricamento = true;
  inCaricamentoBarzellette = false;
  errore: string | null = null;

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.caricareCategorie();
  }

  caricareCategorie() {
    this.inCaricamento = true;
    this.errore = null;

    this.jokeService.ottenereTipiBarzellette().subscribe({
      next: (dati: any) => {
        this.categorie = dati;
        this.inCaricamento = false;
        
        if (this.categorie.length > 0) {
          this.selezionareCategoria(this.categorie[0]);
        }
      },
      error: (errore) => {
        this.errore = 'Errore nel caricamento delle categorie';
        this.inCaricamento = false;
        console.error('Errore:', errore);
      }
    });
  }

  selezionareCategoria(categoria: string) {
    this.categoriaSelezionata = categoria;
    this.inCaricamentoBarzellette = true;
    this.errore = null;

    this.jokeService.ottenereBarzellettePerTipo(categoria).subscribe({
      next: (dati: any) => {
        this.barzellette = dati;
        this.inCaricamentoBarzellette = false;
      },
      error: (errore) => {
        this.errore = `Errore nel caricamento delle barzellette di ${categoria}`;
        this.inCaricamentoBarzellette = false;
        console.error('Errore:', errore);
      }
    });
  }

  rivelareBattuta(barzelletta: any) {
    barzelletta.mostraBattuta = !barzelletta.mostraBattuta;
  }
}