---
layout: home

hero:
  name:

features:
  - icon: 🚀
    title: 更快
  - icon: 🧱
    title: 更强
  - icon: 🧑‍💻
    title: 更便捷
---


<script setup>
import { ref,onMounted } from 'vue'
import { useIntervalFn } from '@vueuse/core'

const start = ref(null)
const end = ref(null)
const index = ref(0)

const colors = ref([{
  start:"#ff5ca8",
  end:"#9867ff"
},{
  start:"#652ca8",
  end:"#9747ff"
},{
  start:"#9867ff",
  end:"#09f"
},{
  start:"#ffcd29",
  end:"#f24822"
},{
  start:"#ffcd29",
  end:"#14ae5c"
}])

const { pause, resume, isActive } = useIntervalFn(() => {
  if (index.value < colors.value.length-1) {
    index.value++
  } else {
    index.value = 0
  }
}, 2000)


onMounted(()=>{
  document.querySelector('.VPHomeHero').append(document.querySelector('.home-bg').childNodes[0])
})
</script>

<div class="home-bg">
<div class="svg-container">
      <svg width="263px" height="63px" viewBox="0 0 263 63" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="linearGradient">
            <stop class="grad-start" :stop-color="colors[index].start" offset="0%" ref="start"></stop>
            <stop class="grad-end" :stop-color="colors[index].end" offset="100%" ref="end"></stop>
        </linearGradient>
    </defs>
    <g id="font" stroke="none" fill="none" fill-rule="evenodd">
        <path d="M13,0.5 L13,25.5 L38,25.5 L38,0.5 L50.5,0.5 L50.5,63 L38,63 L38,38 L13,38 L13,63 L0.5,63 L0.5,0.5 L13,0.5 Z M113,0.5 L113,13 L125.5,13 L125.5,63 L113,63 L113,38 L88,38 L88,63 L75.5,63 L75.5,13 L88,13 L88,0.5 L113,0.5 Z M163,0.5 L163,50.5 L188,50.5 L188,63 L150.5,63 L150.5,0.5 L163,0.5 Z M250.5,0.5 L250.5,13 L263,13 L263,50.5 L250.5,50.5 L250.5,63 L225.5,63 L225.5,50.5 L213,50.5 L213,13 L225.5,13 L225.5,0.5 L250.5,0.5 Z M250.5,13.5 L225.5,13.5 L225.5,50 L250.5,50 L250.5,13.5 Z M113,13.5 L88,13.5 L88,25.5 L113,25.5 L113,13.5 Z" id="形状结合" fill="url(#linearGradient)" fill-rule="nonzero"></path>
    </g>
</svg>
<svg class="shadow" width="263px" height="63px" viewBox="0 0 263 63" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="linearGradient">
            <stop class="grad-start" :stop-color="colors[index].start" offset="0%" ref="start"></stop>
            <stop class="grad-end" :stop-color="colors[index].end" offset="100%" ref="end"></stop>
        </linearGradient>
    </defs>
    <g id="font" stroke="none" fill="none" fill-rule="evenodd">
        <path d="M13,0.5 L13,25.5 L38,25.5 L38,0.5 L50.5,0.5 L50.5,63 L38,63 L38,38 L13,38 L13,63 L0.5,63 L0.5,0.5 L13,0.5 Z M113,0.5 L113,13 L125.5,13 L125.5,63 L113,63 L113,38 L88,38 L88,63 L75.5,63 L75.5,13 L88,13 L88,0.5 L113,0.5 Z M163,0.5 L163,50.5 L188,50.5 L188,63 L150.5,63 L150.5,0.5 L163,0.5 Z M250.5,0.5 L250.5,13 L263,13 L263,50.5 L250.5,50.5 L250.5,63 L225.5,63 L225.5,50.5 L213,50.5 L213,13 L225.5,13 L225.5,0.5 L250.5,0.5 Z M250.5,13.5 L225.5,13.5 L225.5,50 L250.5,50 L250.5,13.5 Z M113,13.5 L88,13.5 L88,25.5 L113,25.5 L113,13.5 Z" id="形状结合" fill="url(#linearGradient)" fill-rule="nonzero"></path>
    </g>
</svg>
  </div>
</div>