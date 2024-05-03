import {createRouter, createWebHistory} from 'vue-router'
//components
import GlobalFeed from '@/views/GlobalFeed.vue'
import Register from '@/views/Register.vue'
import LoginPage from '@/views/LoginPage.vue'

const routes = [
  {
    path: '/global-feed',
    name: 'globalFeed',
    component: GlobalFeed,
  },

  {
    path: '/register',
    name: 'register',
    component: Register,
  },

  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },

  //Заглушка
  {
    path: '/:catchAll(.*)*',
    redirect: '/',
  },
]

const router = createRouter({routes, history: createWebHistory()})

export default router
