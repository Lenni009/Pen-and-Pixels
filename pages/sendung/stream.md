---
aside: false
---
<script setup lang="ts">
import YouTubeEmbed from '../code/components/YouTubeEmbed.vue';
const youtubeLink = 'https://youtube.com/live/qW16RFDy3Kc';
</script>

# Livestream

<YouTubeEmbed v-if="youtubeLink" :src="youtubeLink" class="youtube" />
<p v-else>Momentan ist der Stream nicht verfügbar. Schau später wieder vorbei oder <a href="https://www.youtube.com/@penandpixels" target="_blank" rel="noopener noreferrer">abonniere unseren Kanal</a>!</p>

## Show-Zeiten

Die Sendung wird am 30.04.2024 zu folgenden Zeiten gestreamt (Zeitzone: GMT+2):

- 10:00 - 10:30 Uhr
- 11:45 - 12:15 Uhr
- 14:00 - 14:30 Uhr
