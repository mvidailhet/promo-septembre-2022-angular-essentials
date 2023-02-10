import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postPokemon(pokemon: Pokemon) {
    return this.http.post('https://angular-avance-promo-sept-2022-default-rtdb.europe-west1.firebasedatabase.app/pokemons.json', pokemon);
  }
}
