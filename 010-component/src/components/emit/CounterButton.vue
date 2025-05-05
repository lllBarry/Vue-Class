<script setup>
// 定義要發送的事件
const emit = defineEmits(['number-from-child', 'text-from-child'])

// 點擊按鈕時觸發事件
const handleClick = () => {
  emit('number-from-child', 1)  // 發送事件，並傳遞數值 1
}
const handleToText = () => {
  emit('text-from-child', "hello")  // 發送事件，並傳遞數值 1
}
</script>

<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
  <button @click="handleToText">
    點擊觸發文字事件
  </button>
</template>