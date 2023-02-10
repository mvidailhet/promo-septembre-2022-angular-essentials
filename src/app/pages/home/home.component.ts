import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { AuthService } from 'src/app/services/auth.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentPokemonName = '';
  currentSearch = '';
  pokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
    public authService: AuthService,
    private router: Router
  ) {
    this.pokemonService.getPokemons()
    .subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    });
  }

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

  goToPokemonPage(index: number) {
    this.router.navigate(['pokemon', index], {
      state: {
        pokemon: this.pokemons[index],
      }
    });
  }
}
