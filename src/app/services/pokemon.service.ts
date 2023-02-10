import { Injectable } from '@angular/core';
import { Pokemon, PokemonGender } from '../models/pokemon';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  static STORAGE_POKEMON_KEY = 'pokemons';
  pokemons: Pokemon[] = [];

  constructor(private storageService: StorageService, private apiService: ApiService) {
    this.pokemons = this.getPokemonsFromStorage();
  }

  addPokemon(name: string) {
    const newPokemon: Pokemon = {
      name,
      gender: this.getRandomGender(),
      creationDate: new Date(),
    };
    this.pokemons.push(newPokemon);
    this.storePokemons(this.pokemons);
    this.apiService.postPokemon(newPokemon).subscribe((res: any) => {
      console.log(res);
    });
  }

  storePokemons(pokemons: Pokemon[]) {
    this.storageService.storeItem(PokemonService.STORAGE_POKEMON_KEY, JSON.stringify(pokemons));
  }

  getPokemonsFromStorage(): Pokemon[] {
    const pokemonsStr = this.storageService.getItem(PokemonService.STORAGE_POKEMON_KEY);
    if (!pokemonsStr) return [];
    return JSON.parse(pokemonsStr);
  }

  deletePokemon(index: number) {
    this.pokemons.splice(index, 1);
    this.storePokemons(this.pokemons);
  }

  getRandomGender(): PokemonGender {
    const rand = Math.random();
    if (rand < 0.3) return 'male';
    if (rand < 0.6) return 'female';
    return 'no gender';
  }
}
