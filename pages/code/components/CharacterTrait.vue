<script setup lang="ts">
import { getBonusPoints } from '../logic/math';
import type { CharacterTrait } from '../types/characterSheet';
import { computed } from 'vue';
import { diceSides } from '../variables/constants';

interface Props {
  type: string;
  data: CharacterTrait[];
}

const props = defineProps<Props>();

const bonus = computed(() => getBonusPoints(props.data));
</script>

<template>
  <div>
    <h4>{{ type }} (+{{ bonus }})</h4>
    <table>
      <thead>
        <tr>
          <th>Eigenschaft</th>
          <th>Wert</th>
          <th>Bonus</th>
          <th>Gesamt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ability in data">
          <td>{{ ability.property }}</td>
          <td :class="{ 'background-red': ability.amount > diceSides }">{{ ability.amount }}</td>
          <td>{{ bonus }}</td>
          <td>{{ ability.amount + bonus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.background-red {
  background-color: red;
}
</style>
