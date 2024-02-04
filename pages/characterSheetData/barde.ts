import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';

const handeln: CharacterTrait[] = [
  {
    property: 'Faustkampf',
    amount: 1,
  },
  {
    property: 'Instrument spielen',
    amount: 10,
  },
  {
    property: 'Singen',
    amount: 1,
  },
  {
    property: 'Flüchten',
    amount: 5,
  },
];

const wissen: CharacterTrait[] = [
  {
    property: 'Völkerkunde',
    amount: 3,
  },
  {
    property: 'Wahrnehmung',
    amount: 5,
  },
];

const soziales: CharacterTrait[] = [
  {
    property: 'Überzeugen',
    amount: 15,
  },
  {
    property: 'Bardische Inspiration',
    amount: 12,
  },
  {
    property: 'Bezirzen',
    amount: 4,
  },
  {
    property: 'Feilschen',
    amount: 9,
  },
  {
    property: 'Lügen',
    amount: 7,
  },
  {
    property: 'Menschenkenntnis',
    amount: 8,
  },
];

const inventar: CharacterTrait[] = [];

const characterData: CharacterSheet = {
  name: 'Harald Scheißgesang',
  image: '/images/barde.jpg',
  volk: 'Elbe',
  alter: 1025.5,
  lebensPunkte: 100,
  statur: 'Elbenhaft',
  beruf: 'Barde',
  anmerkungen: 'Zauberspruch: Der braune Ton',
  handeln,
  wissen,
  soziales,
  inventar,
};

export default characterData;
