import { createRouter, createWebHistory } from 'vue-router'
import FirstView from '../views/FirstView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstView
    },
    {
      path: '/second',
      name: 'second',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SecondView.vue')
    }
  ]
})

export default router
