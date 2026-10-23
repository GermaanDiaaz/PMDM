import { Component, inject } from '@angular/core';
import { Episode } from '../../interfaces/episode';
import { EpisodeService } from '../../services/episode';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [],
  templateUrl: './episode-list.html',
  styleUrl: './episode-list.css'
})
export class EpisodeListComponent {
  private episodeService = inject(EpisodeService);

  episodes: Episode[] = [];

  cargarEpisodios(): void {
    this.episodeService.getEpisodes().subscribe({
      next: (response) => {
        this.episodes = response.results;
      },
      error: (err) => {
        console.error('Error al cargar episodios:', err);
      }
    });
  }
}