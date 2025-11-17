import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { JokesListComponent } from './components/jokes-list/jokes-list';
import { CategoriesComponent } from './components/categories/categories';

// Questo file definisce tutte le rotte dell'applicazione
// Ogni rotta mappa un URL a un componente specifico
export const routes: Routes = [
  // Rotta per la homepage - quando l'URL è '/', mostra HomeComponent
  { path: '', component: HomeComponent },
  
  // Rotta per la lista barzellette - quando l'URL è '/jokes-list', mostra JokesListComponent
  { path: 'jokes-list', component: JokesListComponent },
  
  // Rotta per le categorie - quando l'URL è '/categories', mostra CategoriesComponent
  { path: 'categories', component: CategoriesComponent },
  
  // Rotta wildcard - se l'URL non corrisponde a nessuna rotta sopra, reindirizza alla homepage
  // Questo gestisce gli URL non validi
  { path: '**', redirectTo: '' }
];