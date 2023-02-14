import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon, POKEMON_GENDER } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  POKEMON_GENDER = POKEMON_GENDER;
  @Input() pokemon?: Pokemon;
  @Output() onDelete = new EventEmitter();

  onDeletePokemonClick() {
    this.onDelete.emit();
  }
}
