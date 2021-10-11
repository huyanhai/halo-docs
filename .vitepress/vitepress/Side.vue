<template>
  <div>
    <aside class="fixed w-240 border-r pr-10 border-gray-100 box-content pt-20 overflow-y-scroll top-70 bottom-0 hidden md:flex">
      <SideLink :sideGrpup="sideArr" />
    </aside>
    <Drawer v-model="showDrawer" @changeDrawer="changeDrawer">
      <SideLink :sideGrpup="sideArr" @sideItem="showDrawer = false" />
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideLink from "./side/SideLink.vue";
import Drawer from "./Drawer.vue";
import { useCurrentSide } from "../use/currentSideArr";

const { sideArr } = useCurrentSide();
const showDrawer = ref(false);

const sideItem = (e) => {
  showDrawer.value = false;
  console.log(e);
};
const changeDrawer = (e) => {
  showDrawer.value = !e;
};
</script>

<style lang="scss"></style>
