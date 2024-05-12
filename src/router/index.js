import {createRouter, createWebHistory} from 'vue-router'
//components
import GlobalFeed from '@/views/GlobalFeed.vue'
import Register from '@/views/Register.vue'
import LoginPage from '@/views/LoginPage.vue'
import YourFeed from '@/views/YourFeed'
import TagFeed from '@/views/TagFeed'

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
    path: '/feed',
    name: 'feed',
    component: YourFeed,
  },

  {
    path: '/articles/:slug',
    name: 'article',
    component: GlobalFeed,
  },

  //Пути с параметрами Тегов
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeed,
  },
]

const router = createRouter({routes, history: createWebHistory()})

export default router
