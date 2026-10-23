import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListItem } from '../../../interfaces/api';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-item.html',
  styleUrl: './pokemon-item.css'
})
export class PokemonItemComponent {
  @Input({ required: true }) item!: ListItem;

  get pokemonId(): string {
    const parts = this.item.url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  }
}