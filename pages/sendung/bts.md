---
aside: false
---
<script setup lang="ts">
import Gallery from '../code/components/Gallery.vue';

// this is necessary because the glob import doesn't support variables
const day1 = import.meta.glob('/assets/bts/tag1/*.webp', { eager: true, import: 'default' });
const day2 = import.meta.glob('/assets/bts/tag2/*.webp', { eager: true, import: 'default' });
const day3 = import.meta.glob('/assets/bts/tag3/*.webp', { eager: true, import: 'default' });
const day4 = import.meta.glob('/assets/bts/tag4/*.webp', { eager: true, import: 'default' });
const day5 = import.meta.glob('/assets/bts/tag5/*.webp', { eager: true, import: 'default' });
const day6 = import.meta.glob('/assets/bts/tag6/*.webp', { eager: true, import: 'default' });
const day8 = import.meta.glob('/assets/bts/tag8/*.webp', { eager: true, import: 'default' });
const day9 = import.meta.glob('/assets/bts/tag9/*.webp', { eager: true, import: 'default' });

const data = {
  day1: Object.values(day1),
  day2: Object.values(day2),
  day3: Object.values(day3),
  day4: Object.values(day4),
  day5: Object.values(day5),
  day6: Object.values(day6),
  day8: Object.values(day8),
  day9: Object.values(day9),
}
</script>
# Behind the Scenes

![Gruppenbild](/images/gruppenbild.webp)

## Outtakes

## Tag 1

<Gallery :items="data['day1']" />

## Tag 2

<Gallery :items="data['day2']" />

## Tag 3

<Gallery :items="data['day3']" />

## Tag 4

<Gallery :items="data['day4']" />

## Tag 5

<Gallery :items="data['day5']" />

## Tag 6

<Gallery :items="data['day6']" />

## Tag 8

<Gallery :items="data['day8']" />

## Tag 9

<Gallery :items="data['day9']" />
