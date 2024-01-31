<script setup lang="ts">
import type { CharacterSheet } from '../types/characterSheet';
import CharacterTrait from './CharacterTrait.vue';
import CharacterBasicStats from './CharacterBasicStats.vue';
import CharacterInventory from './CharacterInventory.vue';
import { withBase } from 'vitepress';
import { VPTeamMembers } from 'vitepress/theme';
import { computed } from 'vue';
import { addStats } from '../logic/math';

const props = defineProps<CharacterSheet>();

const maxPoints = 80;

const characterData = {
  avatar: withBase(props.image),
  name: props.name,
  title: props.beruf,
};

const totalPoints = computed(() => {
  const { handeln, wissen, soziales } = props;
  const traits = [...handeln, ...wissen, ...soziales];
  const traitValues = traits.map((trait) => trait.amount);
  return addStats(traitValues);
});

const hasTooManyPoints = computed(() => totalPoints.value > maxPoints);
</script>

<template>
  <div class="character-sheet">
    <p
      v-if="hasTooManyPoints"
      class="error"
    >
      Charakter hat zu viele Skillpunkte verbraucht (maximum: {{ maxPoints }}, verbraucht: {{ totalPoints }})
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
      <h4>{{ anmerkungen }}</h4>
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
