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
    amount: 3,
  },
  {
    property: 'Beeindrucken',
    amount: 5,
  },
  {
    property: 'Zechen',
    amount: 14,
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
  gesinnung: '',
  anmerkungen: 'Geistig eingeschränkt, Die Knochenbrecher ist der wohl bekannteste und auch ruhmreichste Zwergen-Klan in ganz Gaia. Aus ihrer Linie entsprangen mächtige Krieger sowie weise Gelehrte hervor. Auch der jüngste Spros, Fridericus Knochenbrecher, hat den Kampfesmut seiner Vorfahren geerbt - leider jedoch nicht die Intiligenz. Die braucht er aber nicht, denn sein Treuer "Hammer der Gerechtigkeit" zerschlägt jedes Problem in 1000 Stücke. Nachdem das Klanoberhaupt von einer vermeintlichen Bedrohung in den Randgebieten erfahren hat, entsand er, vielleicht nicht ganz von der Gefahr überzeugt, seinen jüngsten Sohn. So begann das Abenteuer des Fridericus Knochenbrecher',
  handeln,
  wissen,
  soziales,
  inventar,
};

export default characterData;
