<template>
  <div class="flex flex-row justify-end">
    <el-tooltip content="复制代码" placement="bottom" class="mx-10">
      <img src="/images/copy.svg" class="w-16 cursor-pointer" alt="" srcset="" @click="copyCode" />
    </el-tooltip>
    <el-tooltip content="查看源码" placement="bottom" class="mx-10">
      <img
        src="/images/code.svg"
        class="w-16 cursor-pointer"
        alt=""
        srcset=""
        @click="$emit('showCode')"
      />
    </el-tooltip>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useClipboard } from '@vueuse/core';
import { ElMessage } from 'element-plus';
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
});
const sourceCode = computed(() => {
  return decodeURIComponent(props.code);
});
const copyCode = async () => {
  const { copy } = useClipboard({
    source: sourceCode,
    read: false,
  });
  try {
    await copy();
    ElMessage.success('已复制');
  } catch (error) {
    ElMessage.warning('复制失败');
  }
};
</script>

<style></style>
