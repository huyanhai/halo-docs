<template>
  <div>
    <aside
      class="
        fixed
        w-240
        border-r
        pr-10
        border-gray-100
        box-content
        pt-20
        overflow-y-scroll
        top-70
        bottom-0
        hidden
        md:flex
      "
    >
      <SideLink :sideGrpup="sideArr" />
    </aside>
    <div
      class="drawer-handle transform flex"
      @click="changeDrawer"
      :class="[showDrawer ? 'drawer-open' : 'drawer-close']"
    >
      <i class="drawer-handle-icon"></i>
    </div>
    <el-drawer
      custom-class="drawer-container"
      v-model="showDrawer"
      :with-header="false"
      direction="ltr"
      :z-index="10"
    >
      <SideLink :sideGrpup="sideArr" />
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SideLink from './side/SideLink.vue';
import { useCurrentSide } from '../use/currentSideArr';

const { sideArr } = useCurrentSide();
const showDrawer = ref(false);
const changeDrawer = () => {
  showDrawer.value = !showDrawer.value;
};
</script>

<style lang="scss">
.drawer-container {
  @apply px-20 w-240 #{!important};
  overflow-y: scoll;
}

div.drawer-open {
  @apply translate-x-240 shadow-none #{!important};
  .drawer-handle-icon {
    background: 0 0;
  }
  .drawer-handle-icon::before {
    top: -5px;
    transform: translateY(5px) rotate(45deg);
  }
  .drawer-handle-icon::after {
    transform: translateY(-5px) rotate(-45deg);
    top: 5px;
  }
}

div.drawer-close {
  @apply translate-x-0 #{!important};
}

.drawer-handle {
  position: fixed;
  top: 82px;
  width: 41px;
  height: 40px;
  cursor: pointer;
  z-index: 0;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  right: -40px;
  box-shadow: 2px 0 8px rgb(0 0 0 / 15%);
  border-radius: 0 4px 4px 0;
  left: 0;
  z-index: 3000;
  transition: transform 0.3s cubic-bezier(0.9, 0.9, 0.32, 0.23);
  @apply md:hidden #{!important};
  .drawer-handle-icon {
    width: 14px;
    height: 2px;
    background: #333;
    position: relative;
    &::before {
      top: 5px;
      content: '';
      display: block;
      position: absolute;
      background: #333;
      width: 100%;
      height: 2px;
    }
    &::after {
      top: -5px;
      content: '';
      display: block;
      position: absolute;
      background: #333;
      width: 100%;
      height: 2px;
    }
  }
}
</style>
