import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';

const handeln: CharacterTrait[] = [
  {
    property: 'Fähigkeit',
    amount: 1,
  },
  {
    property: 'Fähigkeit',
    amount: 10,
  },
  {
    property: 'Fähigkeit',
    amount: 1,
  },
  {
    property: 'Fähigkeit',
    amount: 5,
  },
];

const wissen: CharacterTrait[] = [
  {
    property: 'Fähigkeit',
    amount: 3,
  },
  {
    property: 'Fähigkeit',
    amount: 5,
  },
];

const soziales: CharacterTrait[] = [
  {
    property: 'Fähigkeit',
    amount: 15,
  },
  {
    property: 'Fähigkeit',
    amount: 12,
  },
  {
    property: 'Bezirzen',
    amount: 4,
  },
  {
    property: 'Fähigkeit',
    amount: 9,
  },
  {
    property: 'Fähigkeit',
    amount: 7,
  },
  {
    property: 'Fähigkeit',
    amount: 8,
  },
];

const inventar: CharacterTrait[] = [];

export const berserker: CharacterSheet = {
  name: 'Fridericus Knochenbrecher',
  image: '/images/berserker.jpg',
  volk: 'Zwerg',
  alter: 262,
  lebensPunkte: 100,
  statur: 'Zwergenhaft',
  beruf: 'Berserker',
  anmerkungen: '',
  handeln,
  wissen,
  soziales,
  inventar,
};
