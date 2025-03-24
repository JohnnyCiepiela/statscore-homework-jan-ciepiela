import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/task-1',
      name: 'task-1',
      component: () => import('../views/TaskOneView.vue'),
    },
    {
      path: '/task-2',
      name: 'task-2',
      component: () => import('../views/TaskTwoView.vue'),
    },
    {
      path: '/task-3',
      name: 'task-3',
      component: () => import('../views/TaskThreeView.vue'),
    },
  ],
})

export default router
