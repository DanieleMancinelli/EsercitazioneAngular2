import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { JokesListComponent } from './components/jokes-list/jokes-list';
import { CategoriesComponent } from './components/categories/categories';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jokes-list', component: JokesListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '**', redirectTo: '' }
];