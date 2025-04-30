<script>
    export default{
        data (){
            return {
                count: 0
            }
        },
        methods: {
            add(){
                this.count++
            },
            minus(){
                this.count--
            },
            reset(){
                this.count = 0
            }
        }
    }
</script>



<template>
    <div class="card">
      <span class="count">count is {{ count }}</span>
      <button type="button" @click="minus">點點-</button>
      <button type="button" @click="add">點點+</button>
      <button type="button" @click="reset">reset</button>
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