<script setup lang="ts">
import CharacterSheet from '/code/components/CharacterSheet.vue';
import { schurkeStats } from '/characterSheets/schurke';

const {
  name,
  volk,
  alter,
  lebensPunkte,
  statur,
  beruf,
  handeln,
  wissen,
  soziales,
  inventar,
  anmerkungen,
  image,
} = schurkeStats;
</script>

<CharacterSheet
  :image
  :name
  :volk
  :alter
  :lebens-punkte
  :statur
  :beruf
  :handeln
  :wissen
  :soziales
  :inventar
  :anmerkungen
/>
