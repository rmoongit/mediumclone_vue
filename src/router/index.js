import {createRouter, createWebHistory} from 'vue-router'
//components
import Register from '@/views/Register.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'McvHomePage',
    component: HomePage,
  },

  {
    path: '/register',
    name: 'register',
    component: Register,
  },
]

const router = createRouter({routes, history: createWebHistory()})

export default router
