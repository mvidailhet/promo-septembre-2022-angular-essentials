import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
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
  isLoading = false;

  constructor(
    private pokemonService: PokemonService,
    public authService: AuthService,
    private router: Router,
  ) {
    this.getPokemons();
  }

  getPokemons() {
    this.isLoading = true;
    this.pokemonService.getPokemons()
    .pipe(
      delay(2000)
    )
    .subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
      this.isLoading = false;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
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
