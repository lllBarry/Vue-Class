<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Blogpost from './components/Blogpost.vue';
import {ref} from 'vue'
const num = ref(1)
</script>

<template>

  <HelloWorld msg="Vite + Vue" hello="hi" :propsNum="num"/>
  <HelloWorld msg="Nodejs" hello="hi" :propsNum="num"/>
  <Blogpost/>
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
