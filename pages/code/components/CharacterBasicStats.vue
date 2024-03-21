<script setup lang="ts">
import { fixCapitalisation } from '../logic/typing';
import type { CharacterBasics } from '../types/characterSheet';

const props = defineProps<CharacterBasics>();

const formatNum = (value: number | string) => (typeof value === 'string' ? value : value.toLocaleString('de'));
</script>

<template>
  <tr v-for="(value, trait) in props">
    <td>{{ fixCapitalisation(trait) }}</td>
    <td>{{ formatNum(value) }}</td>
  </tr>
</template>
