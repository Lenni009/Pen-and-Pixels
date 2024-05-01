<script setup lang="ts">
import YouTube from 'vue3-youtube';

defineProps<{
  src: string;
}>();
</script>

<template>
  <YouTube
    :src
    class="youtube"
  />
</template>

<style scoped lang="scss">
.youtube {
  width: 100% !important;
  height: auto !important;
  aspect-ratio: 16/9;
  margin-block-start: 1rem;

  :deep(iframe) {
    width: auto !important;
    height: 100% !important;
    aspect-ratio: 16/9;
  }
}
</style>
