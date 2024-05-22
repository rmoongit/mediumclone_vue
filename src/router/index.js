import {createRouter, createWebHistory} from 'vue-router'
//components
import GlobalFeed from '@/views/GlobalFeed.vue'
import Register from '@/views/Register.vue'
import LoginPage from '@/views/LoginPage.vue'
import YourFeed from '@/views/YourFeed'
import TagFeed from '@/views/TagFeed'
import UserArticle from '@/views/UserArticle'
import CreateArticle from '@/views/CreateArticle'
import EditArticle from '@/views/EditArticle'

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
    name: 'yourFeed',
    component: YourFeed,
  },

  //Пути с параметрами Тегов
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeed,
  },

  // Articles
  {
    path: '/articles/:slug',
    name: 'article',
    component: UserArticle,
  },

  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: EditArticle,
  },

  {
    path: '/articles/new',
    name: 'createArticle',
    component: CreateArticle,
  },
]

const router = createRouter({routes, history: createWebHistory()})

export default router
