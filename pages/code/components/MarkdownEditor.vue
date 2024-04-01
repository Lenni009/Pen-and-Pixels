<script setup lang="ts">
import { ref, computed } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useData } from 'vitepress';

const pageContent = ref('# Hello World\n\nThis is content');

const { isDark } = useData();

const theme = computed(() => (isDark.value ? 'dark' : 'light'));

function downloadFile() {
  const element = document.createElement('a');
  element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(pageContent.value);
  element.download = 'Wikiseite.md';
  element.click();
}
</script>

<template>
  <ClientOnly>
    <MdEditor
      v-model="pageContent"
      :noUploadImg="true"
      :theme="theme"
      class="editor"
      language="en-US"
      previewTheme="vuepress"
      @onSave="downloadFile"
    />
  </ClientOnly>
</template>

<style scoped>
.editor {
  margin-block-start: 1rem;
}
</style>
