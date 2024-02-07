import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';

const handeln: CharacterTrait[] = [
  {
    property: 'Schlagen',
    amount: 9,
  },
  {
    property: 'Zweihänder',
    amount: 12,
  },
  {
    property: 'Heben',
    amount: 8,
  },
  {
    property: 'Treten',
    amount: 10,
  },
  {
    property: 'Jagen',
    amount: 10,
  },
   {
    property: 'Angeln',
    amount: 8,
  },
];

const wissen: CharacterTrait[] = [
  {
    property: 'Völkerkunde',
    amount: 6,
  },
  {
    property: 'Spuren lesen',
    amount: 8,
  },
  {
    property: 'Wahrnehmung',
    amount: 5,
  },
];

const soziales: CharacterTrait[] = [
  {
    property: 'Lügen',
    amount: 2,
  },
  {
    property: 'Menschenkenntnis',
    amount: 5,
  },
  {
    property: 'Beeindrucken',
    amount: 5,
  },
  {
    property: 'Zechen',
    amount: 12,
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
