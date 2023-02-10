import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'searchPokemon',
  pure: false
})
export class SearchPokemonPipe implements PipeTransform {

  transform(pokemons: Pokemon[], searchFilter: string): Pokemon[] {
    return pokemons.filter((pokemon: Pokemon) => pokemon.name.includes(searchFilter));
  }

}
