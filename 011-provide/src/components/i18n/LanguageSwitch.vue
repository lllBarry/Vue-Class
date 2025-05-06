<script setup>
import { inject } from 'vue'
const locale = inject("locale")
const toggleLanguage = inject("toggleLanguage")
const currentLang = inject("currentLang")
</script>

<template>
  <div class="language-switch">
    <button @click="toggleLanguage">
      {{ locale.language[currentLang.value === 'zh' ? 'en' : 'zh' ] }}
    </button>
  </div>
</template>