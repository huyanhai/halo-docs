<template>
  <div class="w-full">
    <div v-for="(item, index) in sideGrpup" :key="index">
      <h3 class="text-16 text-black py-10 font-bold">{{ item.text }}</h3>
      <template v-if="item.children">
        <a
          class="h-40 leading-40 block px-20 rounded-sm text-14 text-gray-500 hover:text-gray-900 text-ellipsis cursor-pointer"
          :title="item.text"
          :class="{ 'side-active': pagePath === item.link }"
          v-for="(item, index) in item.children"
          :key="index"
          :href="`${basePath}${item.link}`"
          @click="$emit('sideItem', item)"
        >
          {{ item.text }}
        </a>
      </template>
    </div>
  </div>
</template>

<script setup>
import useFilePath from "../../use/pagePath";
import { toRaw } from "vue";
const { pagePath, basePath } = useFilePath();
const props = defineProps({
  sideGrpup: {
    type: Array,
    require: true,
  },
});
</script>

<style>
.side-active {
  @apply bg-yellow-100 text-gray-900 !important font-bold;
}
.text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
