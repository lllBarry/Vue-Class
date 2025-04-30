<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/counter.vue'
import CounterComposition from './components/CounterComposition.vue'
import NewCounter from './components/NewCounter.vue'
import reactivecount from './components/reactive.vue'


// export default {
//   components: {
//     Counter,
//     CounterComposition,
//     NewCounter
//   },
//   setup (){
//     return{
//       Counter,
//       CounterComposition,
//       NewCounter
//     }
//   }
// }

// ==>這坨等於script裡的setup (CDN不能用setup)


</script>

<template>
  <counter />
  <count />
  <newcount />
  <reactivecount />

</template>

<style scoped>


</style>
