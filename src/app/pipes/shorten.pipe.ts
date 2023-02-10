import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(text: string, nbCharactersToShow = 3): string {

    let nbDot = text.length - nbCharactersToShow;
    let dots = '';
    for (let i = 0; i < nbDot; i++) {
      dots += '.';
    }

    return text.substring(0, nbCharactersToShow) + dots;
  }

}
