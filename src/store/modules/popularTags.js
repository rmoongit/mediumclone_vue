import popularTags from '@/api/popularTags'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationTypes = {
  getTagsStart: '[popularTags] Get popular tags start',
  getTagsSuccess: '[popularTags] Get popular tags success',
  getTagsFailure: '[popularTags] Get popular tags failure',
}

export const actionTypes = {
  getTags: '[popularTags] Get popular tags',
}

const mutations = {
  [mutationTypes.getTagsStart](state) {
    state.isLoading = true
    state.data = null
  },

  [mutationTypes.getTagsSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },

  [mutationTypes.getTagsFailure](state) {
    state.isLoading = false
  },
}

const actions = {
  [actionTypes.getTags](context) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getTagsStart)

      popularTags
        .getTags()
        .then((tags) => {
          context.commit(mutationTypes.getTagsSuccess, tags)

          resolve(tags)
        })
        .catch(() => {
          context.commit(mutationTypes.getTagsFailure)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
