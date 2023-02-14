export const POKEMON_GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  NO_GENDER: 'NO_GENDER',
} as const;

export type PokemonGender = keyof typeof POKEMON_GENDER;

export interface LocalPokemon {
  name: string;
  gender: PokemonGender;
  creationDate: Date;
}

export interface Pokemon extends LocalPokemon {
  id: string;
}
