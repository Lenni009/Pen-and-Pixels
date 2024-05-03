<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  src: string;
}>();

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
</script>

<template>
  <div class="youtube">
    <iframe
      :src="link"
      frameborder="0"
      loading="lazy"
    ></iframe>
  </div>
</template>

<style scoped lang="scss">
.youtube {
  width: 100% !important;
  height: auto !important;
  aspect-ratio: 16/9;
  margin-block-start: 1rem;

  iframe {
    width: auto !important;
    height: 100% !important;
    aspect-ratio: 16/9;
  }
}
</style>
