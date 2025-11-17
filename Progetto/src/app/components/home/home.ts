import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeService } from '../../services/joke'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  barzelletta: any = null;
  mostraBattuta = false;
  inCaricamento = true;
  errore: string | null = null;

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.caricareBarzellettaCasuale();
  }

  caricareBarzellettaCasuale() {
    this.inCaricamento = true;
    this.mostraBattuta = false;
    this.errore = null;

    this.jokeService.ottenereBarzellettaCasuale().subscribe({
      next: (dati: any) => {
        this.barzelletta = dati;
        this.inCaricamento = false;
      },
      error: (errore) => {
        this.errore = 'Errore nel caricamento della barzelletta';
        this.inCaricamento = false;
        console.error('Errore:', errore);
      }
    });
  }

  rivelareBattuta() {
    this.mostraBattuta = true;
  }
}