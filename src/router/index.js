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
import SettingsPage from '@/views/SettingsPage'
import UserProfile from '@/views/UserProfile'

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

  // Settings
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPage,
  },

  // User Profile

  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: UserProfile,
  },

  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: UserProfile,
  },
]

const router = createRouter({routes, history: createWebHistory()})

export default router
