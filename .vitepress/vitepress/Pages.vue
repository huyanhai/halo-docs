<template>
  <div class="py-20 border-t border-gray-100 mt-20">
    <a class="text-gray-500 hover:text-gray-900 page-arrow-left flex items-center float-left text-14" :href="`${basePath}${prevPage.link}`" v-if="prevPage">
      {{ prevPage.text }}
    </a>
    <a class="text-gray-500 hover:text-gray-900 page-arrow-right flex items-center float-right text-14" :href="`${basePath}${nextPage.link}`" v-if="nextPage">
      {{ nextPage.text }}
    </a>
  </div>
</template>

<script setup>
import { computed, ref, toRaw } from "vue";
import { useData } from "vitepress";
import useFilePath from "../use/pagePath";
import { useCurrentSide } from "../use/currentSideArr";
const { sideArr } = useCurrentSide();

const { theme, page } = useData();
const { pagePath, basePath } = useFilePath();

const pagesArr = computed(() => {
  const pagesArr = [];
  sideArr.value.map(({ children }) => pagesArr.push(...toRaw(children)));
  return pagesArr;
});

const pageIndex = computed(() => {
  return pagesArr.value.findIndex((item) => {
    return item.link === pagePath.value;
  });
});

const nextPage = computed(() => {
  if (pageIndex.value > -1 && pageIndex.value < pagesArr.value.length - 1) {
    return pagesArr.value[pageIndex.value + 1];
  }
});

const prevPage = computed(() => {
  if (pageIndex.value > 0) {
    return pagesArr.value[pageIndex.value - 1];
  }
});

// new Date(page.value.lastUpdated).toLocaleString('zh')
</script>

<style lang="scss">
.page-arrow-left {
  &:before {
    content: "";
    background: url("/images/arrow.svg") no-repeat;
    width: 5px;
    height: 10px;
    @apply bg-contain mr-10 transform rotate-180;
  }
}
.page-arrow-right {
  &::after {
    content: "";
    background: url("/images/arrow.svg") no-repeat;
    width: 5px;
    height: 10px;
    @apply bg-contain ml-10;
  }
}
</style>
