<script setup lang="ts">
import type { CharacterSheet } from '../types/characterSheet';
import CharacterTrait from './CharacterTrait.vue';
import CharacterBasicStats from './CharacterBasicStats.vue';
import CharacterInventory from './CharacterInventory.vue';
import { withBase } from 'vitepress';
import { VPTeamMembers } from 'vitepress/theme';
import { computed, toRefs } from 'vue';
import { addStats } from '../logic/math';
import { maxPoints } from '../variables/constants';

const props = defineProps<{
  data: CharacterSheet;
}>();

const {
  name,
  volk,
  alter,
  lebensPunkte,
  statur,
  gesinnung,
  beruf,
  handeln,
  wissen,
  soziales,
  inventar,
  anmerkungen,
  image,
} = toRefs(props.data);

const characterData = {
  avatar: withBase(image.value),
  name: name.value,
  title: beruf.value,
};

const totalPoints = computed(() => {
  const traits = [...handeln.value, ...wissen.value, ...soziales.value];
  const traitValues = traits.map((trait) => trait.amount);
  return addStats(traitValues);
});

const hasTooManyPoints = computed(() => totalPoints.value > maxPoints);
const hasTooLittlePoints = computed(() => totalPoints.value < maxPoints);

const addInfoParagraphs = computed(() => anmerkungen.value.split('\n').filter(Boolean));
</script>

<template>
  <div class="character-sheet">
    <p
      v-if="hasTooManyPoints"
      class="error"
    >
      Charakter hat zu viele Skillpunkte verbraucht (maximum: {{ maxPoints }}, verbraucht: {{ totalPoints }})
    </p>
    <p
      v-if="hasTooLittlePoints"
      class="error"
    >
      Charakter hat noch Skillpunkte übrig (maximum: {{ maxPoints }}, verbraucht: {{ totalPoints }})
    </p>
    <VPTeamMembers
      :members="[characterData]"
      class="character-profile"
      size="medium"
    />
    <div>
      <h4>Grundlagen</h4>
      <table>
        <tr>
          <th>Eigenschaft</th>
          <th>Wert</th>
        </tr>
        <CharacterBasicStats
          :volk
          :alter
          :lebens-punkte
          :statur
          :gesinnung
        />
      </table>
    </div>
    <div class="character-traits">
      <CharacterTrait
        type="Handeln"
        :data="handeln"
      />
      <CharacterTrait
        type="Wissen"
        :data="wissen"
      />
      <CharacterTrait
        type="Soziales"
        :data="soziales"
      />
    </div>
    <CharacterInventory :data="inventar" />
    <div>
      <h4>Zusätzliche Informationen</h4>
      <p v-for="paragraph in addInfoParagraphs">{{ paragraph }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.character-sheet {
  margin-block-start: 1rem;

  .error {
    background-color: red;
    padding: 0.25rem;
    border-radius: 5px;
  }

  .character-profile {
    margin-block-end: 1rem;
  }

  .character-traits {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1rem;
  }
}
</style>
