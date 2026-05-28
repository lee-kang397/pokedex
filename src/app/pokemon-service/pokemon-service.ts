import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  types: string[];
  forms: string[];
  frontSprite: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
  private cache = new Map<string | number, Pokemon>();
  private nameToId = new Map<string, number>();

  constructor(private http: HttpClient) {}

  getPokemon(nameOrId: string | number): Observable<Pokemon> {
    // Return cached result if available
    if (typeof nameOrId === 'number') {
      return this.getById(nameOrId);
    }

    // If it's a name, resolve to an id first
    return this.resolveId(nameOrId).pipe(
      switchMap(id => this.getById(id))
    );
  }

  clearCache(): void {
    this.cache.clear();
  }

  private getById(id: number): Observable<Pokemon> {
    if (this.cache.has(id)) {
      return of(this.cache.get(id)!);
    }

    return this.http.get<any>(`${this.BASE_URL}/${id}`).pipe(
      map(data => this.mapPokemon(data)),
      tap(pokemon => {
        this.cache.set(pokemon.id, pokemon);
        this.nameToId.set(pokemon.forms[0], pokemon.id);
      })
    );
  }
  private resolveId(name: string): Observable<number> {
    const normalized = name.toLowerCase();

    // Return cached name→id mapping if available
    if (this.nameToId.has(normalized)) {
      return of(this.nameToId.get(normalized)!);
    }

    // Otherwise fetch just enough to get the id, then cache the mapping
    return this.http.get<any>(`${this.BASE_URL}/${normalized}`).pipe(
      map(data => data.id as number),
      tap(id => this.nameToId.set(normalized, id))
    );
  }

  private mapPokemon(data: any): Pokemon {
    return {
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: data.types.map((t: any) => t.type.name),
      forms: data.forms.map((f: any) => f.name),
      frontSprite: data.sprites.front_default,
    };
  }

}