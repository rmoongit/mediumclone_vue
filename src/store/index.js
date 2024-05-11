import {createStore} from 'vuex'

import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'
import popularTags from '@/store/modules/popularTags'

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
  },
})
