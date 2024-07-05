import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CadUser',
      component: () => import('../views/cad-user.vue')
    }
  ]
})

export default router
