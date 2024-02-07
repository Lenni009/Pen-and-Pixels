import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';

const handeln: CharacterTrait[] = [
  {
    property: 'Schlagen',
    amount: 10,
  },
  {
    property: 'Zweihänder',
    amount: 10,
  },
  {
    property: 'Heben',
    amount: 10,
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
    amount: 10,
  },
];

const wissen: CharacterTrait[] = [
  {
    property: 'Völkerkunde',
    amount: 5,
  },
  {
    property: 'Spuren lesen',
    amount: 5,
  },
  {
    property: 'Wahrnehmung',
    amount: 9,
  },
];

const soziales: CharacterTrait[] = [
  {
    property: 'Lügen',
    amount: 5,
  },
  {
    property: 'Menschenkenntnis',
    amount: 5,
  },
  {
    property: 'Beeindrucken',
    amount: 5,
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
