<template>
  <header class="header border-b border-gray-100 px-30">
    <section class="h-70 max-w-1376 w-full items-center flex flex-row justify-between mx-auto">
      <a href="/" class="flex items-center h-30">
        <img class="mr-10 h-full max-w-full" src="/images/logo.svg" alt="" srcset="" />
      </a>
      <div class="flex flex-row items-center">
        <Search class="hidden sm:hidden md:block" />
        <Menus class="mr-20" />
        <GitHub :url="`https://github.com/${repo}`" />
      </div>
    </section>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';

import Menus from './navs/Menus.vue';
import Search from './navs/Search.vue';
import GitHub from './navs/GitHub.vue';

const { theme } = useData();
const repo = computed(() => {
  return theme.value.repo;
});
</script>

<style lang="scss">
// .header {
//   background: hsla(0, 0%, 100%, 0.5);
//   backdrop-filter: saturate(180%) blur(20px);
// }
</style>
