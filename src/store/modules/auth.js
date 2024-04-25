import authApi from '@/api/auth'

// Начальное состояние
const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

// Мутирует состояние
const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  },

  registerSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },

  registerFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
}

// Асинхронная последовательность
const actions = {
  register(context, credentials) {
    context.commit('registerStart')
    return new Promise((resolve) => {
      authApi
        .register(credentials)
        .then((response) => {
          context.commit('registerSuccess', response.data.user)
          resolve(response.data.user)
        })
        .catch((result) => {
          context.commit('registerFailure', result.response.data.errors)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
