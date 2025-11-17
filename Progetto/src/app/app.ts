import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// Il componente principale dell'applicazione
// Questo è il componente "radice" che contiene tutta l'app
@Component({
  selector: 'app-root', // Il tag HTML che useremo per questo componente: <app-root></app-root>
  standalone: true,     // Indica che è un componente autonomo, non ha bisogno di un modulo
  imports: [            // Qui importiamo tutti i moduli e componenti che usiamo nel template
    RouterOutlet,       // Componente che mostra il contenuto della rotta corrente
    RouterLink,         // Direttiva per creare link di navigazione
    CommonModule        // Modulo con direttive comuni come *ngIf, *ngFor
  ],
  templateUrl: './app.html',  // File HTML del template
  styleUrl: './app.css'       // File CSS per lo styling
})
export class AppComponent {
  // Proprietà del componente - il titolo che appare nella navbar
  protected readonly title = 'JokeApp';
}