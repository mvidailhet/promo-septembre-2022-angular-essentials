export type PokemonGender = 'male' | 'female' | 'no gender';

export interface LocalPokemon {
  name: string;
  gender: PokemonGender;
  creationDate: Date;
}

export interface Pokemon extends LocalPokemon {
  id: string;
}
