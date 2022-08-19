<template>
  <div class="p-20 border border-gray-100 border-b-0 overflow-x-scroll">
    <component v-if="demo" :is="demo" v-bind="$attrs" />
  </div>
</template>

<script setup>
const props = defineProps({
  demo: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
