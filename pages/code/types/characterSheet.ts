export interface CharacterTrait {
  property: string;
  amount: number;
}

export interface CharacterBasics {
  volk: string;
  alter: number;
  lebensPunkte: number;
  statur: string;
  gesinnung: string;
}

export interface CharacterSheet extends CharacterBasics {
  name: string;
  beruf: string;
  image: string;
  handeln: CharacterTrait[];
  wissen: CharacterTrait[];
  soziales: CharacterTrait[];
  inventar: CharacterTrait[];
  anmerkungen: string;
}
