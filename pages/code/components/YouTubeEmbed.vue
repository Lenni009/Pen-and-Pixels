<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{
  src: string;
}>();

const title = ref('');

const id = computed(() => {
  try {
    const url = new URL(props.src);
    const searchParams = new URLSearchParams(url.search);
    const videoId = searchParams.get('v');
    const lastUrlItem = url.pathname.split('/').filter(Boolean).at(-1);
    return videoId ?? lastUrlItem ?? '';
  } catch {
    return '';
  }
});
const link = computed(() => `https://www.youtube.com/embed/${id.value}`);

onMounted(async () => {
  const res = await fetch(`https://www.youtube.com/oembed?url=https://youtu.be/${id.value}`);
  const jsonData: unknown = await res.json();
  if (jsonData && typeof jsonData === 'object' && 'title' in jsonData && typeof jsonData.title === 'string')
    title.value = jsonData.title;
});
</script>

<template>
  <div class="youtube">
    <iframe
      :src="link"
      :title
      loading="lazy"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped lang="scss">
.youtube,
.youtube iframe {
  margin-block-start: 1rem;
  width: 100%;
  aspect-ratio: 16/9;
  border: none;
}
</style>
