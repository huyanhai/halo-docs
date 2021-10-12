<template>
  <div class="demo">
    <p v-html="decodedDescription"></p>
    <div class="container">
      <Operation class="px-10 py-20 border border-gray-100" @showCode="showCode" :code="rawSource" />
      <Example :file="path" :demo="formatPathDemos[path]" />
      <el-collapse-transition>
        <SourceCode v-if="showSource" :code="source" class="px-20 bg-gray-50 border border-gray-100 border-t-0" />
      </el-collapse-transition>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Operation from "./demo/Operation.vue";
import SourceCode from "./demo/SourceCode.vue";
import Example from "./demo/Example.vue";

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
  cssPreProcessor: {
    type: String,
    required: true,
  },
  js: {
    type: String,
    required: true,
  },
  jsPreProcessor: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  demos: {
    type: Object,
    required: true,
  },
  rawSource: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
const formatPathDemos = computed(() => {
  const demos = {};
  Object.keys(props.demos).forEach((key) => {
    demos[key.replace("../../examples/", "").replace(".vue", "")] = props.demos[key].default;
  });
  return demos;
});

let showSource = ref(false);

const showCode = () => {
  showSource.value = !showSource.value;
};

const decodedDescription = computed(() => decodeURIComponent(props.description));
</script>

<style></style>
