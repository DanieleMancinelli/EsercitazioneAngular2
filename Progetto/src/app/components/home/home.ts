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
  joke: any = null;
  showPunchline = false;
  isLoading = true;
  error: string | null = null;

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.loadRandomJoke();
  }

  loadRandomJoke() {
    this.isLoading = true;
    this.showPunchline = false;
    this.error = null;

    this.jokeService.getRandomJoke().subscribe({
      next: (data: any) => {
        this.joke = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Errore nel caricamento della barzelletta';
        this.isLoading = false;
        console.error('Error loading joke:', error);
      }
    });
  }

  revealPunchline() {
    this.showPunchline = true;
  }
}