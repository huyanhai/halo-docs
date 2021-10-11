<template>
  <div class="drawer-wraper fixed h-full left-0 top-0 z-20 transform flex" :class="[$attrs.modelValue ? 'drawer-container-open' : 'drawer-container-close']">
    <div class="drawer-container h-full bg-white overflow-y-scroll">
      <slot></slot>
    </div>
    <div class="drawer-handle flex" @click="$emit('changeDrawer', $attrs.modelValue)" :class="[$attrs.modelValue ? 'drawer-open' : 'drawer-close']">
      <i class="drawer-handle-icon"></i>
    </div>
  </div>
  <div class="fixed w-full h-full z-10 bg-black opacity-50 top-0 left-0" v-if="$attrs.modelValue" @touchmove.prevent></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.drawer-wraper {
  transition: all 0.3s;
}

.drawer-container {
  @apply px-20 w-240 #{!important};
  overflow-y: scoll;
}

div.drawer-open {
  @apply shadow-none #{!important};
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

.drawer-container-open {
  @apply translate-x-0 #{!important};
}

.drawer-container-close {
  transform: translateX(-240px);
}

.drawer-handle {
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
  z-index: 3000;
  flex: 0 0 auto;
  margin-top: 80px;
  // transition: transform 0.3s cubic-bezier(0.9, 0.9, 0.32, 0.23);
  @apply md:hidden #{!important};
  .drawer-handle-icon {
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
