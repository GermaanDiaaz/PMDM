import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponse } from '../interfaces/api';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);

  getPokemonList(): Observable<ListResponse> {
    return this.http.get<ListResponse>('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonDetail(id: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}