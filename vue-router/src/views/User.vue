<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = () => {
    authStore.logout()
    router.push('/login')
}



const id = 789
const url =`/user/${id}/profile` 


</script>



<template>
    <h2>User</h2>
    <button type="button" @click="handleLogout">登出</button>
    <RouterLink to="url">Profile</RouterLink>
    <Router-View />

</template>