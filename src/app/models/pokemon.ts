export type PokemonGender = 'male' | 'female' | 'no gender';

export interface Pokemon {
  name: string;
  gender: PokemonGender;
  creationDate: Date;
}
