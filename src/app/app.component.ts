import { Component } from '@angular/core';
import { Pokemon, PokemonGender } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPokemonName = '';
  pokemons: Pokemon[] = [];

  addPokemon() {
    this.pokemons.push({
      name: this.currentPokemonName,
      gender: this.getRandomGender(),
    });
  }

  getRandomGender(): PokemonGender {
    const rand = Math.random();
    if (rand < 0.3) return 'male';
    if (rand < 0.6) return 'female';
    return 'no gender';
  }
}
