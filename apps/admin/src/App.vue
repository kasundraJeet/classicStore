<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useColorMode } from '@vueuse/core'
const mode = useColorMode()
</script>

<template>
  <Toaster />
  <RouterView />
</template>
