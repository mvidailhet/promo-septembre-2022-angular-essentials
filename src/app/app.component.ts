import { Component } from '@angular/core';
import { Pokemon, PokemonGender } from './models/pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPokemonName = '';
  pokemons: Pokemon[] = this.pokemonService.pokemons;

  constructor(private pokemonService: PokemonService) {}

  onAddPokemonClick() {
    this.pokemonService.addPokemon(this.currentPokemonName);
    this.currentPokemonName = '';
  }

  onDeletePokemonClick(index: number) {
    this.pokemonService.deletePokemon(index);
  }
}
