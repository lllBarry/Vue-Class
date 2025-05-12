<template>
    <h2>這是登入頁面</h2>
    <form @submit.prevent="handleLogin">
        <input type="text" placeholder="請輸入帳號" v-model="username">
        <input type="password" placeholder="請輸入密碼" v-model="password">
        <button type="submit" >登入</button>
    </form>
</template>

<script setup>
import { ref } from "vue"
import { useAuthStore } from "../store/auth"
import { useRouter } from "vue-router"

const router = useRouter()


const username = ref("")
const password = ref("")

const authStore = useAuthStore()

const handleLogin = () => {
    console.log(username.value, password.value);
    if(username.value === "admin" && password.value === "1234"){
        authStore.login("1234")
        router.push('/user/1234')
    } else {
        alert("沒資格")
    }
}

</script>