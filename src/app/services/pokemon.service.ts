import { Injectable } from '@angular/core';
import { Pokemon, PokemonGender } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [];

  constructor() { }

  addPokemon(name: string) {
    this.pokemons.push({
      name,
      gender: this.getRandomGender(),
    });
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
