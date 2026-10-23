import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail';
import { BerryListComponent } from './components/berry/berry-list/berry-list';
import { BerryDetailComponent } from './components/berry/berry-detail/berry-detail';
import { ItemListComponent } from './components/item/item-list/item-list';
import { ItemDetailComponent } from './components/item/item-detail/item-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'berry', component: BerryListComponent },
  { path: 'berry/:id', component: BerryDetailComponent },
  { path: 'item', component: ItemListComponent },
  { path: 'item/:id', component: ItemDetailComponent }
];