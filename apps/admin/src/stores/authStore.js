import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const tokenIsHere = localStorage.getItem('token')
  const isLogging = ref(tokenIsHere ? true : false)

  function setLoggin(value) {
    isLogging.value = value
  }

  return { isLogging, setLoggin }
})
