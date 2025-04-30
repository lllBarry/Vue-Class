<script setup>
    import { ref, computed } from 'vue'

    const title = ref("精美筆記本")
    const description = ref("高品質紙張，精裝封面")
    const price = ref("100")
    const quantity = ref("0")

    const totalPrice = computed(()=> price.value * quantity.value)


    const add = () => {
        quantity.value++
    }
    const minus = () => {
        quantity.value--
    }


</script>

<template>
    <div class="card">
        <h2>{{title}}</h2>
        <span>{{ description }}</span><br>
        <div>
            <p>單價: ${{ price }}</p>
            <p>數量: {{ quantity }}</p>
            <p>總價: ${{ totalPrice }}</p>
        </div>
        <button class="QuantityBtn" @click="minus">-</button>    
        <input type="number" v-model="quantity" >
        <button class="QuantityBtn" @click="add">+</button>    
    </div>


</template>

<style scoped>
    .card{
        margin: 10px;
        background-color: rgb(84, 29, 136);
        border-radius: 15px;
        text-align: start;
    }

    .QuantityBtn{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
</style>