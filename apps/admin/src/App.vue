<script setup lang="ts">
import { ref } from 'vue';
import { Toaster } from '@/components/ui/sonner'
import { useColorMode } from '@vueuse/core'
import LayoutWrapper from '@/components/custom/LayoutWrapper.vue';
import { RouterView } from 'vue-router';
import { useAuthStore } from '@/stores'
const mode = useColorMode()
const authStore = useAuthStore()
</script>

<template>
  <Toaster />
  <LayoutWrapper v-if="authStore.isLogging">
    <RouterView />
  </LayoutWrapper>
  <RouterView v-else />
</template>
