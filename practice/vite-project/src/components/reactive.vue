<script setup>
    import { reactive, toRefs } from 'vue'

    const count = reactive({
        num: 0,
        add () {
            count.num++
        },
        minus () {
            count.num--
        },
        reset () {
            count.num = 0
        },
    })
    
    const {num, add, minus, reset}= toRefs(count)
    

    
</script>



<template>
    <div class="card">
      <span class="count">count is {{ count.num }}</span>
      <button type="button" @click="count.minus">點點-</button>
      <button type="button" @click="count.add">點點+</button>
      <button type="button" @click="count.reset">reset</button>
    </div>
</template>

<style scoped>
button{
    padding: 10px 20px;
    margin: 0 10px;
    vertical-align: middle;
    background-color: rgb(89, 27, 146);
}
.count{
    font-size: 1em;
    color: rgb(212, 163, 163);
}

</style>