import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../../../services/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css'
})
export class PokemonDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);
  private cdr = inject(ChangeDetectorRef);

  pokemon: any = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonDetail(id).subscribe({
        next: (data) => {
          this.pokemon = data;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err)
      });
    }
  }
}