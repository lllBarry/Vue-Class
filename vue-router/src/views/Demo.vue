<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

console.log(route);

</script>


<template>
    <div></div>
    <h1>
        {{ $route.name }} view
        $可加可不加
    </h1>



</template>


<style scoped>
    div{
        width: 100px;
        height: 50px;
        background-color: aqua;
        margin: auto;
    }
</style>