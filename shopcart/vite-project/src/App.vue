<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Shopcart from './components/shopcart.vue';
import Shopcart2 from './components/shopcart2.vue';
</script>

<template>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
   <Shopcart />
   <Shopcart2 />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
