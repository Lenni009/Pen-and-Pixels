import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';
import { reactive } from 'vue';

const handeln: CharacterTrait[] = reactive([
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
]);

const wissen: CharacterTrait[] = reactive([
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
]);

const soziales: CharacterTrait[] = reactive([
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
]);

const inventar: CharacterTrait[] = reactive([
  {
    property: '"Bello"- der Hammer',
    amount: 1
  } 
]);

const characterData: CharacterSheet = reactive({
  name: 'Fridericus Knochenbrecher',
  image: '/images/berserker.jpg',
  volk: 'Zwerg',
  alter: 262,
  lebensPunkte: 100,
  statur: 'Zwergenhaft',
  beruf: 'Berserker',
  gesinnung: 'Lawful Bad',
  anmerkungen:
    'Geistig eingeschränkt/Alkoholabhänig (vor allem Bier), Die Knochenbrecher sind der wohl bekannteste und auch ruhmreichste Zwergen-Klan in ganz Gaia. Aus ihrer Linie sprangen mächtige Krieger sowie weise Gelehrte hervor. Auch der jüngste Spross, Fridericus Knochenbrecher, hat den Kampfesmut seiner Vorfahren geerbt - leider jedoch nicht die Intelligenz. Die braucht er aber nicht, denn sein treuer Kriegshammer "Bello" zerschlägt jedes Problem in 1000 Stücke. Nachdem das Klanoberhaupt von einer vermeintlichen Bedrohung in den Randgebieten erfahren hat, entsand er, vielleicht nicht ganz von der Gefahr überzeugt, seinen jüngsten Sohn. So begann das Abenteuer des Fridericus Knochenbrecher.',
  handeln,
  wissen,
  soziales,
  inventar,
});

export default characterData;
