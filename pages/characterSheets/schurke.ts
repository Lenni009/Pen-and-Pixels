import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';

const handeln: CharacterTrait[] = [
  {
    property: 'Taschendiebstahl',
    amount: 11,
  },
  {
    property: 'Schleichen',
    amount: 8,
  },
  {
    property: 'Akrobatik',
    amount: 3,
  },
  {
    property: 'Fallen legen',
    amount: 2,
  },
  {
    property: 'Werfen',
    amount: 10,
  },
  {
    property: 'Hieb-/Stichwaffen',
    amount: 16,
  },
  {
    property: 'Ausweichen',
    amount: 6,
  },
];

const wissen: CharacterTrait[] = [
  {
    property: 'Fallen legen',
    amount: 3,
  },
  {
    property: 'Arkanes Wissen',
    amount: 9,
  },
];

const soziales: CharacterTrait[] = [];

const inventar: CharacterTrait[] = [];

export const schurkeStats: CharacterSheet = {
  name: 'Morzan Schattenläufer',
  volk: 'Wiedergänger (Mensch)',
  alter: 69,
  lebensPunkte: 100,
  statur: 'Groß',
  beruf: 'Schurke',
  anmerkungen: '',
  handeln,
  wissen,
  soziales,
  inventar,
  image: '/images/schurke.jpg',
};
