<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { onBeforeRouteLeave } from 'vue-router';

onBeforeRouteLeave((to, from, next)=>{
  const question = window.confirm('確定要離開嗎???')

  if(!question){
    next(false)
  }else{
    next()
  }

})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
