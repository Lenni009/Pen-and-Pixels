import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';

const handeln: CharacterTrait[] = [
  {
    property: 'Schlagen',
    amount: 1,
  },
  {
    property: 'Zweihänder',
    amount: 1,
  },
  {
    property: 'Heben',
    amount: 1,
  },
  {
    property: 'Treten',
    amount: 1,
  },
  {
    property: 'Jagen',
    amount: 1,
  },
   {
    property: 'Angeln',
    amount: 1,
  },
];

const wissen: CharacterTrait[] = [
  {
    property: 'Völkerkunde',
    amount: 3,
  },
  {
    property: 'Spuren lesen',
    amount: 5,
  },
];

const soziales: CharacterTrait[] = [
  {
    property: 'Lügen',
    amount: 1,
  },
  {
    property: 'Menschenkenntnis',
    amount: 1,
  },
  {
    property: 'Beeindrucken',
    amount: 1,
  },

];

const inventar: CharacterTrait[] = [];

const characterData: CharacterSheet = {
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

export default characterData;
