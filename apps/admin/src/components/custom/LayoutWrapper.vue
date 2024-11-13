<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Bell, Cog } from 'lucide-vue-next'

const navLinks = ref([
  {
    id: "1",
    link_name: "Dashboard",
    link_path: "/",
    link_active: ["/"]
  },
  {
    id: "2",
    link_name: "Products",
    link_path: "/products",
    link_active: ["/products" , "/product-add-edit"]
  }
])

const route = useRoute()

const isActive = (link) => {
  return link.link_active.includes(route.path)
}
</script>

<template>
  <main class="flex flex-col w-full  h-dvh overflow-hidden">
    <header class="w-full flex items-center justify-between border-b border-solid border-border px-3">
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
    <ScrollArea class="w-full h-full">
      <section class="w-full h-full">
        <slot />
      </section>
    </ScrollArea>
  </main>
</template>
