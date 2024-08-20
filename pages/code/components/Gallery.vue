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
        &lt;
      </button>
      <button
        v-if="selected !== items.length - 1"
        class="jump-btn next"
        @click="selected++"
      >
        &gt;
      </button>
      <img
        :src="items[selected]"
        alt="Behind the Scenes"
        class="main-img"
        loading="lazy"
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
      --btn-background: transparent;
      position: absolute;
      height: 100%;
      font-size: large;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-inline: 0.5rem;

      &:hover {
        --btn-background: rgba(from lightgrey r g b / 0.5);
        background-color: var(--btn-background);
      }

      &.next {
        right: 0;
      }
    }

    .main-img {
      width: auto;
      max-height: calc(100svh - 200px);
      margin-inline: auto;
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

.dark .jump-btn:hover {
  --btn-background: rgba(from dimgrey r g b / 0.5) !important;
}
</style>
