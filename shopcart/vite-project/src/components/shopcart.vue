<script setup>
    import { reactive, toRefs } from 'vue'
    import { ref } from 'vue'
    // const state = reactive({
    //     quantity: 0,
    //     price: 100,
    //     title:"精美筆記本",
    //     description:"高品質紙張，精裝封面"
    // })
    const title = ref("精美筆記本")
    const description = ref("高品質紙張，精裝封面")
    const price = ref("100")
    const quantity = ref("0")
    const totalPrice = ref("0")

    // const { quantity, price } = toRefs(state)

    const add = () => {
        quantity.value++
        updateTotalPrice()
    }
    const minus = () => {
        quantity.value--
        updateTotalPrice()

    }
    const updateTotalPrice = () => {
        totalPrice.value = price.value * quantity.value
    }
    
    



</script>

<template>
    <div class="card">
        <h2>{{title}}</h2>
        <span>{{ description }}</span><br>
        <div>
            <p>單價: ${{ price }}</p>
            <p>數量: {{ quantity }}</p>
            <p>總價: ${{ price* quantity }}</p>
        </div>
        <button class="QuantityBtn" @click="minus">-</button>    
        <input type="text" v-model="quantity" @input="updateTotalPrice">
        <button class="QuantityBtn" @click="add">+</button>    
    </div>


</template>

<style scoped>
    .card{
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