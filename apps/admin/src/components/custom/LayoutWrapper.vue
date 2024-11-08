<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Bell, Cog } from 'lucide-vue-next'

const navLinks = ref([
  {
    id: "1",
    link_name: "Dashboard",
    link_path: "/",
    link_active: ["/"]
  }
])

const route = useRoute()

const isActive = (link) => {
  return link.link_active.includes(route.path)
}
</script>

<template>
  <main class="divide-y divide-border flex flex-col w-full">
    <header class="w-full flex items-center justify-between px-3">
      <ul class="flex items-center gap-2">
        <li v-for="link in navLinks" :key="link.id" :class="isActive(link) ? 'border-b py-1.5 border-foreground' : ''">
          <Button :variant="isActive(link) ? '' : 'ghost'" as-child>
            <RouterLink :to="link.link_path">
              {{ link.link_name }}
            </RouterLink>
          </Button>
        </li>
      </ul>
      <div class="flex items-center gap-2">
        <Button variant="outline" size="icon" class="rounded-full max-w-8 max-h-8">
          <Bell />
        </Button>
        <Button variant="outline" size="icon" class="rounded-full max-w-8 max-h-8">
          <Cog />
        </Button>
      </div>
    </header>
    <section class="w-full h-full">
      <slot />
    </section>
  </main>
</template>
