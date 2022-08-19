<template>
  <div class="demo">
    <p v-html="decodedDescription"></p>
    <div class="container">
      <Example :file="path" :demo="formatPathDemos[path]" />
      <Operation class="px-10 py-10 border border-gray-100" @showCode="showCode" :code="rawSource" />
      <el-collapse-transition>
        <SourceCode v-if="showSource" :code="source" class="px-20 bg-gray-50 border border-b-0 border-gray-100 border-t-0" />
      </el-collapse-transition>
      <div v-if="showSource" class="border border-gray-100 text-14 text-center py-2 sticky bottom-0 bg-white" @click="showSource = false">隐藏源码</div>
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

const decodedDescription = computed(() => {
  return decodeURIComponent(props.description);
});
</script>

<style></style>
