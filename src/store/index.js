import {createStore} from 'vuex'

import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'
import popularTags from '@/store/modules/popularTags'
import article from '@/store/modules/article'
import createArticle from '@/store/modules/createArticle'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  // Передаём в модули состояние отдельного модуля
  modules: {
    auth,
    feed,
    popularTags,
    article,
    createArticle,
  },
})
