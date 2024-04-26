---
aside: false
sidebar: false
pageClass: youtube-container
next: false
prev: false
---
<script setup lang="ts">
import YouTube from 'vue3-youtube'
</script>

# Livestream

<YouTube src="https://youtu.be/EzWJqc4YWlc" class="youtube" />

## Show-Zeiten

Die Sendung wird am 30.04.2024 zu folgenden Zeiten gestreamt (Zeitzone: GMT+2):

- 10:00 - 10:30 Uhr
- 11:45 - 12:15 Uhr
- 14:00 - 14:30 Uhr

<style lang="scss">
.youtube-container .content {
  max-width: unset !important;

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
}
</style>
