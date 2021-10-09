<template>
  <a :href="url">
    <img class="w-20 cursor-pointer" src="/images/github.svg" alt="" srcset="" />
  </a>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
  },
});
</script>

<style></style>
