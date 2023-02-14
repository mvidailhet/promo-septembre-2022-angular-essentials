import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalPokemon } from '../models/pokemon';
import { LocalUser } from '../models/user';

export interface PostResult {
  name: string;
}

export interface GetPokemonsResult {
  id: LocalPokemon;
}

export interface GetUsersResult {
  id: LocalUser;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://angular-avance-promo-sept-2022-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private http: HttpClient) { }

  postPokemon(pokemon: LocalPokemon) {
    return this.http.post<PostResult>(`${this.apiUrl}/pokemons.json`, pokemon);
  }

  getPokemons() {
    return this.http.get<GetPokemonsResult>(`${this.apiUrl}/pokemons.json`);
  }

  postUser(user: LocalUser) {
    return this.http.post<PostResult>(`${this.apiUrl}/users.json`, user);
  }

  getUsers() {
    return this.http.get<GetUsersResult>(`${this.apiUrl}/users.json`);
  }
}
