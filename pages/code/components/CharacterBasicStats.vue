<script setup lang="ts">
import { fixCapitalisation } from '../logic/typing';
import { CharacterBasics } from '../types/characterSheet';

const props = defineProps<CharacterBasics>();
</script>

<template>
  <tr v-for="(value, trait) in props">
    <td>{{ fixCapitalisation(trait) }}</td>
    <td>{{ value }}</td>
  </tr>
</template>
