<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  items: string[];
}>();

const selected = ref(0);
</script>

<template>
  <div class="gallery-container">
    <div>
      <img
        :src="items[selected]"
        alt="Behind the Scenes"
        class="main-img"
      />
    </div>
    <div class="gallery">
      <div
        v-for="(image, index) in items"
        class="img"
      >
        <img
          :src="image"
          alt="Behind the Scenes"
          @click="selected = index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gallery-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .main-img {
    width: auto;
    max-height: calc(100svh - 200px);
  }

  .gallery {
    display: flex;
    gap: 0.25rem;
    overflow-x: scroll;

    .img {
      cursor: pointer;

      img {
        max-height: 100px;
        max-width: unset;
        height: 100%;
        width: auto;
      }
    }
  }
}
</style>
