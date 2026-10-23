import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponse } from '../interfaces/api';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private http = inject(HttpClient);

  getItemList(): Observable<ListResponse> {
    return this.http.get<ListResponse>('https://pokeapi.co/api/v2/item');
  }

  getItemDetail(id: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/item/${id}`);
  }
}