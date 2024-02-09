<script setup lang="ts">
import type { CharacterTrait } from '../types/characterSheet';

interface Props {
  data: CharacterTrait[];
}

defineProps<Props>();
</script>

<template>
  <div>
    <h4>Inventar</h4>
    <table>
      <thead>
        <tr>
          <th>Gegenstand</th>
          <th>Anzahl</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data">
          <td>{{ item.property }}</td>
          <td>{{ item.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
