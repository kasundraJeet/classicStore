import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/DashboardView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/product-add-edit',
      name: 'productsAddEdit',
      component: () => import('@/views/ProductAddEdit.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
console.log(authStore.isLogging)
  if (to.meta.requiresAuth && !authStore.isLogging) {
    next({ name: 'login' })
  } else if(!to.meta.requiresAuth && authStore.isLogging){
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
