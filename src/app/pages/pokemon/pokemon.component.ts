import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  onGoToPokemonPage() {

    setTimeout(() => {
      this.router.navigate(['pokemon'], {
        relativeTo: this.activatedRoute
      });
    }, 2000);


  }
}
