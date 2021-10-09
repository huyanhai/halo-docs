<template>
  <pre>
      <div class="source-code language-vue" v-html="code"></div>
  </pre>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
});
const code = computed(() => {
  return decodeURIComponent(props.code);
});
</script>

<style>
.source-code {
  background: transparent !important;
  margin: 0 !important;
}
</style>
