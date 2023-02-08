import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() pokemon?: Pokemon;
}
