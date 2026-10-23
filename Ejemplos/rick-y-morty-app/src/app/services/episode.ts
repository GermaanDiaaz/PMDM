import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeResponse } from '../interfaces/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  getEpisodes(): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(this.apiUrl);
  }
}