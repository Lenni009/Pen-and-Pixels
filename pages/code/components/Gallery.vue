<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  items: string[];
}>();

const selected = ref(0);
</script>

<template>
  <div class="gallery-container">
    <div class="main-image-container">
      <button
        v-if="selected"
        class="jump-btn back"
        @click="selected--"
      >
        <
      </button>
      <button
        v-if="selected !== items.length - 1"
        class="jump-btn next"
        @click="selected++"
      >
        >
      </button>
      <img
        :src="items[selected]"
        alt="Behind the Scenes"
        class="main-img"
      />
    </div>
    <div class="gallery">
      <div
        v-for="(image, index) in items"
        :class="{ selected: selected === index }"
        class="img"
      >
        <img
          :src="image"
          alt="Behind the Scenes"
          loading="lazy"
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

  .main-image-container {
    align-content: center;
    position: relative;

    .jump-btn {
      position: absolute;
      bottom: 50%;
      aspect-ratio: 1;
      font-size: large;
      left: 1rem;
      border-radius: 50%;
      background-color: #52525294;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;

      &.next {
        right: 1rem;
        left: unset;
      }
    }

    .main-img {
      width: auto;
      max-height: calc(100svh - 200px);
    }
  }

  .gallery {
    display: flex;
    gap: 0.15rem;
    overflow-x: scroll;
    scroll-behavior: smooth;

    .img {
      cursor: pointer;
      border: 1px solid transparent;

      &.selected {
        border-color: var(--vp-c-text-1);
      }

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
