import authApi from '@/api/auth'
import {setItem} from '@/helpers/localStorage'

// Начальное состояние
const state = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

// Описываем типы мутирования стейта
export const mutationTypes = {
  registerStart: '[auth] registerStart',
  registerSuccess: '[auth] registerSuccess',
  registerFailure: '[auth] registerFailure',

  loginStart: '[auth] loginStart',
  loginSuccess: '[auth] loginSuccess',
  loginFailure: '[auth] loginFailure',

  getCurrentUserStart: '[auth] getCurrentUserStart',
  getCurrentUserSuccess: '[auth] getCurrentUserSuccess',
  getCurrentUserFailure: '[auth] getCurrentUserFailure',

  updateCurrentUserStart: '[auth] updateCurrentUserStart',
  updateCurrentUserSuccess: '[auth] updateCurrentUserSuccess',
  updateCurrentUserFailure: '[auth] updateCurrentUserFailure',

  logout: '[auth] logout',
}

//Описываем типы action стейта
export const actionTypes = {
  register: '[auth] register',
  login: '[auth] login',
  getCurrentUser: '[auth] getCurrentUser',
  updateCurrentUser: '[auth] updateCurrentUser',
  logout: '[auth] logout',
}

// Описываем типы getters
export const getterTypes = {
  currentUser: '[auth] currentUser',
  isLoggedIn: '[auth] isLoggedIn',
  isAnonymous: '[auth] isAnonymous',
}

// Присваеваем getters
const getters = {
  [getterTypes.currentUser]: (state) => {
    return state.currentUser
  },

  [getterTypes.isLoggedIn]: (state) => {
    return Boolean(state.isLoggedIn)
  },

  [getterTypes.isAnonymous]: (state) => {
    return state.isLoggedIn === false
  },
}

// Мутирует состояние
const mutations = {
  // Мутация при регистрации
  [mutationTypes.registerStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },

  [mutationTypes.registerSuccess](state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },

  [mutationTypes.registerFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },

  // Мутация при входе (логин)
  [mutationTypes.loginStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },

  [mutationTypes.loginSuccess](state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },

  [mutationTypes.loginFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },

  // Мутация при получении юзера
  [mutationTypes.getCurrentUserStart](state) {
    state.isLoading = true
  },

  [mutationTypes.getCurrentUserSuccess](state, payload) {
    state.isLoading = false
    state.currentUser = payload
    state.isLoggedIn = true
  },

  [mutationTypes.getCurrentUserFailure](state) {
    state.isLoading = false
    state.isLoggedIn = false
    state.currentUser = null
  },

  // Мутация при обновлении юзера с формы

  [mutationTypes.updateCurrentUserStart]() {},

  [mutationTypes.updateCurrentUserSuccess](state, payload) {
    state.currentUser = payload
  },

  [mutationTypes.updateCurrentUserFailure]() {},

  // Мутация при logout

  [mutationTypes.logout](state) {
    state.currentUser = null
    state.isLoggedIn = false
  },
}

// Асинхронная последовательность
const actions = {
  [actionTypes.register](context, credentials) {
    context.commit(mutationTypes.registerStart)
    return new Promise((resolve) => {
      authApi
        .register(credentials)
        .then((response) => {
          context.commit(mutationTypes.registerSuccess, response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch((result) => {
          context.commit(
            mutationTypes.registerFailure,
            result.response.data.errors
          )
        })
    })
  },

  [actionTypes.login](context, credentials) {
    context.commit(mutationTypes.loginStart)

    return new Promise((resolve) => {
      authApi
        .login(credentials)
        .then((response) => {
          context.commit(mutationTypes.loginSuccess, response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch((result) => {
          context.commit(
            mutationTypes.loginFailure,
            result.response.data.errors
          )
        })
    })
  },

  [actionTypes.getCurrentUser](context) {
    context.commit(mutationTypes.getCurrentUserStart)

    return new Promise((resolve) => {
      authApi
        .getCurrentUser()
        .then((response) => {
          context.commit(
            mutationTypes.getCurrentUserSuccess,
            response.data.user
          )
          resolve(response.data.user)
        })
        .catch(() => {
          context.commit(mutationTypes.getCurrentUserFailure)
        })
    })
  },

  [actionTypes.updateCurrentUser](context, {currentInput}) {
    context.commit(mutationTypes.updateCurrentUserStart)

    return new Promise((resolve) => {
      authApi
        .updateCurrentUser(currentInput)
        .then((user) => {
          context.commit(mutationTypes.updateCurrentUserSuccess, user)
          resolve(user)
        })
        .catch((result) => {
          context.commit(
            mutationTypes.updateCurrentUserFailure,
            result.response.data.errors
          )
        })
    })
  },

  [actionTypes.logout](context) {
    return new Promise((resolve) => {
      setItem('accessToken', '')
      context.commit(mutationTypes.logout)
      resolve()
    })
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
