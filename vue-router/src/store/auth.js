import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useAuthStore = defineStore('auth',()=>{
    const token = ref(localStorage.getItem('token'))//取得目前 token
    const isAuth = computed(() => token.value)//判斷是否有 token

    const login = (newToken) => {//寫入新的 token
        token.value = newToken
        localStorage.setItem('token',newToken)
    }

    const logout = () => {//清空 token
        token.value = null
        localStorage.removeItem('token')
    }

    return {token, isAuth, login, logout}
})

