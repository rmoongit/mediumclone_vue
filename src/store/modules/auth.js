// Начальное состояние
const state = {
  isSubmitting: false,
}

// Мутирует состояние
const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  },
}

// Асинхронная последовательность
const actions = {
  register(context) {
    setTimeout(() => {
      context.commit('registerStart')
    }, 1000)
  },
}

export default {
  state,
  mutations,
  actions,
}
