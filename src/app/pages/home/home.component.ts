import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { AuthService } from 'src/app/services/auth.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentPokemonName = '';
  pokemons: Pokemon[] = this.pokemonService.pokemons;

  constructor(private pokemonService: PokemonService, public authService: AuthService) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  onAddPokemonClick() {
    this.pokemonService.addPokemon(this.currentPokemonName);
    this.currentPokemonName = '';
  }

  onDeletePokemonClick(index: number) {
    this.pokemonService.deletePokemon(index);
  }
}
