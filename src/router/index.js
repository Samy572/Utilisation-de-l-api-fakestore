import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shopping from '../views/Shopping.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    }

  ]
})

export default router
