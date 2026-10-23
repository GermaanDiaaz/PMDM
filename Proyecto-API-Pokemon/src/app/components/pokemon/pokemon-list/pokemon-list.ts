import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { PokemonService } from '../../../services/pokemon';
import { ListItem } from '../../../interfaces/api';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonItemComponent],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonListComponent implements OnInit {
  private pokemonService = inject(PokemonService);
  private cdr = inject(ChangeDetectorRef);

  pokemonList: ListItem[] = [];

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe({
      next: (data) => {
        console.log('Datos de la API recibidos:', data);
        this.pokemonList = data.results;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error en la petición HTTP:', err)
    });
  }
}