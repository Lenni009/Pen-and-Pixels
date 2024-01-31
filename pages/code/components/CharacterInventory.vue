<script setup lang="ts">
import type { CharacterTrait } from '../types/characterSheet';

interface Props {
  data: CharacterTrait[];
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <h4>Inventar</h4>
    <table>
      <tr>
        <th>Gegenstand</th>
        <th>Anzahl</th>
      </tr>
      <tr v-for="item in data">
        <td>{{ item.property }}</td>
        <td>{{ item.amount }}</td>
      </tr>
    </table>
  </div>
</template>
