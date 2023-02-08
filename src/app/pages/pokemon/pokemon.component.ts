import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  pokemon?: Pokemon;
  pokemonIndex?: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    const indexStr = this.activatedRoute.snapshot.params['index'];
    this.pokemonIndex = parseInt(indexStr);
    this.pokemon = this.pokemonService.pokemons[this.pokemonIndex];
  }

}
