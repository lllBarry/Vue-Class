<script setup>
// const props = defineProps({
//     isFavorite:{
//         type:Boolean,
//         default:false
//     }
// })
defineProps(['isFavorite'])
const emit = defineEmits(['toggle-favorite'])
// const like = ()=>{
//     emit('toggle-favorite',!props.isFavorite)
// }
</script>
<template>
    <!-- <button @click="like">
        {{ props.isFavorite ? '❤️' : '🤍' }}
    </button> -->
    <button @click="emit('toggle-favorite')">
        <span>{{ isFavorite ? '❤️' : '🤍' }}</span>
    </button>
</template>