import {createRouter, createWebHistory} from 'vue-router'
//components
import GlobalFeed from '@/views/GlobalFeed.vue'
import Register from '@/views/Register.vue'
import LoginPage from '@/views/LoginPage.vue'

const routes = [
  {
    path: '/',
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

  // Пути с параметрами карточек Feed
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: GlobalFeed,
  },

  {
    path: '/articles/:slug',
    name: 'article',
    component: GlobalFeed,
  },

  //Пути с параметрами Тегов
  {
    path: '/tag/:slug',
    name: 'tag',
    component: GlobalFeed,
  },
]

const router = createRouter({routes, history: createWebHistory()})

export default router
