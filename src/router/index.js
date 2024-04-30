import {createRouter, createWebHistory} from 'vue-router'
//components
import HomePage from '@/views/HomePage.vue'
import Register from '@/views/Register.vue'
import LoginPage from '@/views/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
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
