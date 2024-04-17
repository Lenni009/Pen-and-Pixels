import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';
import { reactive } from 'vue';

const handeln: CharacterTrait[] = reactive([
  {
    property: 'Schlagen',
    amount: 0,
  },
]);

const wissen: CharacterTrait[] = reactive([
  {
    property: 'Magisches Wissen',
    amount: 0,
  },
  {
    property: 'Pyromantie',
    amount: 0,
  },
  {
    property: 'Kryomantie',
    amount: 0,
  },
  {
    property: 'Nekromantie',
    amount: 0,
  },
  {
    property: 'Hydromantie',
    amount: 0,
  },
  {
    property: 'Aeropmantie',
    amount: 0,
  },
  {
    property: 'Geomantie',
    amount: 0,
  },
  {
    property: 'Polymorph',
    amount: 0,
  },
]);

const soziales: CharacterTrait[] = reactive([
  {
    property: 'Menschenkenntnis',
    amount: 0,
  },
  {
    property: 'Feilschen',
    amount: 0,
  },
  {
    property: 'Überzeugen',
    amount: 0,
  },
  {
    property: 'Beeindrucken',
    amount: 0,
  },
  {
    property: 'Lehren',
    amount: 0,
  },
]);

const inventar: CharacterTrait[] = reactive([
  {
    property: 'Stab',
    amount: 1
  }
]);

const characterData: CharacterSheet = reactive({
  name: 'Angmar Nazaroth',
  image: '/images/magier.jpg',
  volk: 'Mensch',
  alter: 85,
  lebensPunkte: 100,
  statur: 'Jugendhaft Alt',
  beruf: 'Magier',
  gesinnung: 'Neutral Good',
  anmerkungen: `Anführer der Gruppe
  Erfahrenster Spieler`,
  handeln,
  wissen,
  soziales,
  inventar,
});

export default characterData;
