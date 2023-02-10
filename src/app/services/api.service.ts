import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalPokemon, Pokemon } from '../models/pokemon';

export interface PostPokemonResult {
  name: string;
}

export interface GetPokemonsResult {
  id: LocalPokemon;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://angular-avance-promo-sept-2022-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private http: HttpClient) { }

  postPokemon(pokemon: LocalPokemon) {
    return this.http.post<PostPokemonResult>(`${this.apiUrl}/pokemons.json`, pokemon);
  }

  getPokemons() {
    return this.http.get<GetPokemonsResult>(`${this.apiUrl}/pokemons.json`);
  }
}
