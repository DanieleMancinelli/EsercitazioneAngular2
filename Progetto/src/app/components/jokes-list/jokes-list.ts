import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeService } from '../../services/joke';
@Component({
  selector: 'app-jokes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jokes-list.html',
  styleUrls: ['./jokes-list.css']
})
export class JokesListComponent implements OnInit {
  barzellette: any[] = [];
  inCaricamento = true;
  errore: string | null = null;

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.caricareDieciBarzellette();
  }

  caricareDieciBarzellette() {
    this.inCaricamento = true;
    this.errore = null;

    this.jokeService.ottenereDieciBarzellette().subscribe({
      next: (dati: any) => {
        this.barzellette = dati;
        this.inCaricamento = false;
      },
      error: (errore) => {
        this.errore = 'Errore nel caricamento delle barzellette';
        this.inCaricamento = false;
        console.error('Errore:', errore);
      }
    });
  }

  ricaricareBarzellette() {
    this.caricareDieciBarzellette();
  }

  rivelareBattuta(barzelletta: any) {
    barzelletta.mostraBattuta = !barzelletta.mostraBattuta;
  }
}