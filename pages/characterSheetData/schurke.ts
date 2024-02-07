import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';
import { reactive } from 'vue';

const handeln: CharacterTrait[] = reactive([
  {
    property: 'Taschendiebstahl',
    amount: 10,
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
    amount: 12,
  },
  {
    property: 'Ausweichen',
    amount: 6,
  },
  {
    property: 'Schloss knacken',
    amount: 9,
  },
]);

const wissen: CharacterTrait[] = reactive([
  {
    property: 'Fallen legen',
    amount: 3,
  },
  {
    property: 'Arkanes Wissen',
    amount: 2,
  },
  {
    property: 'Wahrnehmung',
    amount: 9,
  },
  {
    property: 'Flora',
    amount: 5,
  },
  {
    property: 'Fauna',
    amount: 5,
  },
]);

const soziales: CharacterTrait[] = reactive([
  {
    property: 'Betören',
    amount: 1,
  },
  {
    property: 'Lügen',
    amount: 10,
  },
  {
    property: 'Manipulieren',
    amount: 5,
  },
]);

const inventar: CharacterTrait[] = reactive([
  {
    property: 'Kurzschwert',
    amount: 2,
  },
]);

const characterData: CharacterSheet = reactive({
  name: 'Morzan Schattenläufer',
  image: '/images/schurke.jpg',
  volk: 'Wiedergänger (Mensch)',
  alter: 69,
  lebensPunkte: 100,
  statur: 'Groß',
  beruf: 'Schurke',
  gesinnung: '',
  anmerkungen: 'Lustmolch',
  handeln,
  wissen,
  soziales,
  inventar,
});

export default characterData;
