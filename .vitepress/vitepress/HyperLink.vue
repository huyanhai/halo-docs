<template>
  <aside
    class="
      w-140
      pl-30
      box-content
      bg-white
      flex-col
      text-12
      z-50
      leading-6
      flex-nowrap
      sticky
      top-36
      sm:hidden
      md:hidden
      lg:hidden
      xl:flex
      h-0
    "
  >
    <a
      class="text-gray-500 hover:text-gray-900 whitespace-nowrap"
      :class="{ 'text-gray-900': pageHash === item.slug }"
      :href="`#${item.slug}`"
      v-for="(item, index) in hyperLink"
      :key="index"
    >
      {{ item.title }}
    </a>
  </aside>
</template>

<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import { useHash } from '../use/hashChange';

const { page } = useData();
const { pageHash, pathName } = useHash();

const hyperLink = computed(() => {
  return page.value.headers;
});
</script>

<style lang="scss"></style>
