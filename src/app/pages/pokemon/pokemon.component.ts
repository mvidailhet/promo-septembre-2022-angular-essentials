import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
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
export class PokemonComponent implements CanComponentDeactivate {
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
    private pokemonService: PokemonService,
    private router: Router,
  ) {
    this.handlePageParams();

    const currentNavigation = this.router.getCurrentNavigation();
    const state = currentNavigation?.extras.state;

    if (state && state['pokemon']) {
      this.pokemon = state['pokemon'];
    }
  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    if (!this.isEditing) return true;
    return confirm('Es-tu certain de vouloir quitter la page sans sauvegarder ?');
  }

  handlePageParams() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const indexStr = params['index'];
      this.pokemonIndex = parseInt(indexStr);

      if (this.pokemon) return;

      this.pokemon = this.pokemonService.pokemons[this.pokemonIndex];
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.isEditing = params['edit'] === 'true';
    });
  }

}
