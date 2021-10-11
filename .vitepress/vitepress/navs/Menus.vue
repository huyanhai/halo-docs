<template>
  <div>
    <nav class="flex-row hidden md:flex">
      <a
        class="px-10 cursor-pointer text-14 text-gray-500 hover:text-gray-900"
        :class="{ 'text-gray-900': item.link.includes(componentsName) }"
        :href="`${basePath}/zh${item.link}`"
        v-for="(item, index) in menus"
        :key="index"
      >
        {{ item.text }}
      </a>
    </nav>
    <el-popover v-model:visible="showMenu">
      <div class="flex flex-col">
        <a
          class="px-10 cursor-pointer text-14 text-gray-500 hover:text-gray-900 h-30 leading-30"
          :class="{ 'text-gray-900': item.link.includes(componentsName) }"
          :href="`${basePath}/zh${item.link}`"
          v-for="(item, index) in menus"
          :key="index"
          @click="showMenu = false"
        >
          {{ item.text }}
        </a>
      </div>
      <template #reference>
        <div class="menu-handle transform flex" @click="showMenu = !showMenu">
          <i class="menu-handle-icon"></i>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useData } from "vitepress";
import { useHash } from "../../use/hashChange";
import useFilePath from "../../use/pagePath";

const { theme } = useData();
const { componentsName } = useHash();
const { basePath } = useFilePath();

const menus = theme.value.nav;
const showMenu = ref(false);
</script>

<style lang="scss">
.menu-handle {
  width: 41px;
  height: 40px;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  @apply md:hidden #{!important};
  .menu-handle-icon {
    width: 14px;
    height: 2px;
    background: #333;
    position: relative;
    &::before {
      top: 5px;
      content: "";
      display: block;
      position: absolute;
      background: #333;
      width: 100%;
      height: 2px;
    }
    &::after {
      top: -5px;
      content: "";
      display: block;
      position: absolute;
      background: #333;
      width: 100%;
      height: 2px;
    }
  }
}
</style>
