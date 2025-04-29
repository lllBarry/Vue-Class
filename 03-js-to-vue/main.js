Vue.createApp({
    data ( ) {
        return{
            count: 1
        }
    },
    methods: {
        add ( ){
            this.count++
        },
        minus ( ){
            this.count--
        }
    }
}).mount('#app')
