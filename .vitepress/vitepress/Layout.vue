<template>
  <div class="h-screen flex flex-col">
    <Nav class="fixed top-0 w-full bg-white z-10" />
    <CusContent class="pt-70" v-if="componentsName && pagePath !== '/zh/'" />
    <Content v-else />
    <Debug />
  </div>
</template>

<script setup>
import { useData } from 'vitepress';
import { useHash } from '../use/hashChange';

import useFilePath from '../use/pagePath';
import CusContent from './Content.vue';
import Nav from './Nav.vue';

const { page } = useData();
const { pagePath } = useFilePath();
const { componentsName } = useHash();
</script>

<style></style>
