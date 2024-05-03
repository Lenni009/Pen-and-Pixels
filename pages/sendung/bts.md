<script setup lang="ts">
import Gallery from '../code/components/Gallery.vue';
import YouTubeEmbed from '../code/components/YouTubeEmbed.vue';


// this is necessary because the glob import doesn't support variables
const bts240130 = import.meta.glob('/assets/bts/240130/*.webp', { eager: true, import: 'default' });
const bts240131 = import.meta.glob('/assets/bts/240131/*.webp', { eager: true, import: 'default' });
const bts240201 = import.meta.glob('/assets/bts/240201/*.webp', { eager: true, import: 'default' });
const bts240207 = import.meta.glob('/assets/bts/240207/*.webp', { eager: true, import: 'default' });
const bts240416 = import.meta.glob('/assets/bts/240416/*.webp', { eager: true, import: 'default' });
const bts240417 = import.meta.glob('/assets/bts/240417/*.webp', { eager: true, import: 'default' });
const bts240422 = import.meta.glob('/assets/bts/240422/*.webp', { eager: true, import: 'default' });
const bts240423 = import.meta.glob('/assets/bts/240423/*.webp', { eager: true, import: 'default' });
const bts240430 = import.meta.glob('/assets/bts/240430/*.webp', { eager: true, import: 'default' });

const data = {
  240130: Object.values(bts240130),
  240131: Object.values(bts240131),
  240201: Object.values(bts240201),
  240207: Object.values(bts240207),
  240416: Object.values(bts240416),
  240417: Object.values(bts240417),
  240422: Object.values(bts240422),
  240423: Object.values(bts240423),
  240430: Object.values(bts240430),
}
</script>
# Behind the Scenes

![Gruppenbild](/images/gruppenbild.webp)

<YouTubeEmbed src="https://youtu.be/E72xLeEtLm8" />

## 30. Januar 2024

<Gallery :items="data['240130']" />

## 31. Januar 2024

<Gallery :items="data['240131']" />

## 1. Februar 2024

<Gallery :items="data['240201']" />

## 7. Februar 2024

<Gallery :items="data['240207']" />

## 16. April 2024

<Gallery :items="data['240416']" />

## 17. April 2024

<Gallery :items="data['240417']" />

## 22. April 2024

<Gallery :items="data['240422']" />

## 23. April 2024

<Gallery :items="data['240423']" />

## 30. April 2024

<Gallery :items="data['240430']" />
