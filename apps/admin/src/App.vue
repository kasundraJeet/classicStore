<script setup lang="ts">
import { ref } from 'vue';
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useColorMode } from '@vueuse/core'
import LayoutWrapper from '@/components/custom/LayoutWrapper.vue';
import { RouterView } from 'vue-router';
const mode = useColorMode()
const isLoggin = ref(false)
console.log('isLoggin value:', isLoggin.value);
</script>

<template>
  <Toaster />
  <LayoutWrapper v-if="isLoggin">
    <RouterView />
  </LayoutWrapper>
  <RouterView v-else />
</template>
