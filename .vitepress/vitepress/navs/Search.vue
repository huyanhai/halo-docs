<template>
  <div class="algolia-search-box" id="docsearch" v-if="search" />
</template>

<script setup>
import docsearch from '@docsearch/js';
import '@docsearch/css/dist/style.css';
import { ref, onMounted, onDeactivated } from 'vue';
import { useData } from 'vitepress';

const { theme } = useData();
const search = ref(false);
const timer = ref(null);

onMounted(() => {
  const { agolia } = theme.value;
  if (agolia.apiKey && agolia.appId) {
    search.value = true;
    timer.value = setTimeout(() => {
      docsearch({
        container: '#docsearch',
        apiKey: agolia.apiKey,
        appId: agolia.appId,
        debug: true,
      });
    }, 100);
  }
});

onDeactivated(() => {
  if (timer.value) {
    clearTimeout(timer.value);
  }
});
</script>

<style lang="scss">
.algolia-search-box {
  min-width: 180px;
  margin: 0 20px;
}
.DocSearch {
  width: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 0 10px;
  box-sizing: border-box;
  .DocSearch-Button-Container {
    display: flex;
    align-items: center;
  }
  .DocSearch-Button-Keys {
    display: flex;
    align-items: center;
  }
}
</style>
