<template>
  <div class="px-30 flex-auto h-1/2">
    <section class="flex flex-row max-w-1376 mx-auto flex-1 w-full h-full">
      <Side />
      <section
        class="flex-1 w-full pt-30 pb-50 flex flex-row pl-0"
        :class="{ 'md:pl-280': pagePath !== '/zh/' }"
      >
        <div class="flex-1 w-full flex flex-col">
          <Content class="flex-1 w-full" />
          <Pages />
        </div>
        <HyperLink class="hidden md:flex" v-if="!componentsName || componentsName !== 'guide'" />
      </section>
    </section>
  </div>
</template>

<script setup>
import { useData } from 'vitepress';
import useFilePath from '../use/pagePath';
import { useHash } from '../use/hashChange';

import Side from './Side.vue';
import Pages from './Pages.vue';
import HyperLink from './HyperLink.vue';

const { pagePath } = useFilePath();
const { componentsName } = useHash();
</script>

<style></style>
