import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';
import { reactive } from 'vue';

const handeln: CharacterTrait[] = reactive([
  {
    property: 'Schlagen',
    amount: 4,
  },
  {
    property: 'Faustkampf',
    amount: 3,
  },
  {
    property: 'Treten',
    amount: 3,
  },
]);

const wissen: CharacterTrait[] = reactive([
  {
    property: 'Magisches Wissen',
    amount: 12,
  },
  {
    property: 'Pyromantie',
    amount: 10,
  },
  {
    property: 'Kryomantie',
    amount: 10,
  },
  {
    property: 'Nekromantie',
    amount: 10,
  },
  {
    property: 'Hydromantie',
    amount: 10,
  },
  {
    property: 'Aeropmantie',
    amount: 10,
  },
  {
    property: 'Geomantie',
    amount: 10,
  },
  {
    property: 'Polymorph',
    amount: 5,
  },
]);

const soziales: CharacterTrait[] = reactive([
  {
    property: 'Menschenkenntnis',
    amount: 3,
  },
  {
    property: 'Feilschen',
    amount: 1,
  },
  {
    property: 'Überzeugen',
    amount: 2,
  },
  {
    property: 'Beeindrucken',
    amount: 2,
  },
  {
    property: 'Lehren',
    amount: 5,
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
