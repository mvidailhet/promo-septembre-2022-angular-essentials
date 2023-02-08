import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

interface PokemonTab {
  name: string;
  path: string;
}

@Component({
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  pokemon?: Pokemon;
  pokemonIndex?: number;
  isEditing = false;

  tabs: PokemonTab[] = [{
    path: 'general',
    name: 'Général',
  }, {
    path: 'details',
    name: 'Détails',
  }]

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.handlePageParams();
  }

  handlePageParams() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const indexStr = params['index'];
      this.pokemonIndex = parseInt(indexStr);
      this.pokemon = this.pokemonService.pokemons[this.pokemonIndex];
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.isEditing = params['edit'] === 'true';
    });
  }

}
