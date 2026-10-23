import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponse } from '../interfaces/api';

@Injectable({ providedIn: 'root' })
export class BerryService {
  private http = inject(HttpClient);

  getBerryList(): Observable<ListResponse> {
    return this.http.get<ListResponse>('https://pokeapi.co/api/v2/berry');
  }

  getBerryDetail(id: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/berry/${id}`);
  }
}