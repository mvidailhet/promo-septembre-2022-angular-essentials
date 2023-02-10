import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { LocalPokemon, Pokemon, PokemonGender } from '../models/pokemon';
import {
  ApiService,
  GetPokemonsResult,
  PostPokemonResult,
} from './api.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  static STORAGE_POKEMON_KEY = 'pokemons';
  pokemons: Pokemon[] = [];

  constructor(private apiService: ApiService) {}

  addPokemon(name: string) {
    const newLocalPokemon: LocalPokemon = {
      name,
      gender: this.getRandomGender(),
      creationDate: new Date(),
    };

    this.apiService
      .postPokemon(newLocalPokemon)
      .subscribe((res: PostPokemonResult) => {
        const newPokemon: Pokemon = {
          ...newLocalPokemon,
          id: res.name,
        };
        this.pokemons.push(newPokemon);
      });
  }

  getPokemons() {
    return this.apiService.getPokemons()
    .pipe(
      map((res: GetPokemonsResult) => {
        const pokemons: Pokemon[] = [];
        Object.entries(res).forEach(([id, pokemon]) => {
          pokemons.push({
            ...pokemon,
            id,
          });
        });
        return pokemons;
      }),
      tap((pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      })
    );
  }

  deletePokemon(index: number) {
    this.pokemons.splice(index, 1);
  }

  getRandomGender(): PokemonGender {
    const rand = Math.random();
    if (rand < 0.3) return 'male';
    if (rand < 0.6) return 'female';
    return 'no gender';
  }
}
