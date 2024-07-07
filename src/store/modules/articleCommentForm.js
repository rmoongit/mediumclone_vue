import commentFormApi from '@/api/articleCommentForm'

const state = {
  validationErrors: null,
}

const mutationsTypes = {
  commentCreateStart: '[ArticleComment] Comment create start',
  commentCreateSuccess: '[ArticleComment] Comment create success',
  commentCreateFailure: '[ArticleComment] Comment create failure',

  commentDeleteStart: '[ArticleComment] Comment delete start',
  commentDeleteSuccess: '[ArticleComment] Comment delete success',
  commentDeleteFailure: '[ArticleComment] Comment delete failure',
}

export const actionTypes = {
  commentCreate: '[ArticleComment] Comment create',
  commentDelete: '[ArticleComment] Comment delete',
}

const mutations = {
  [mutationsTypes.commentCreateStart]() {},
  [mutationsTypes.commentCreateSuccess]() {},
  [mutationsTypes.commentCreateFailure](state, payload) {
    state.validationErrors = payload
  },

  [mutationsTypes.commentDeleteStart]() {},
  [mutationsTypes.commentDeleteSuccess]() {},
  [mutationsTypes.commentDeleteFailure]() {},
}

const actions = {
  [actionTypes.commentCreate](context, {slug, formData}) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.commentCreateStart)

      commentFormApi
        .addComment(slug, formData)
        .then((data) => {
          context.commit(mutationsTypes.commentCreateSuccess, data)
          resolve(data)
        })
        .catch((result) => {
          context.commit(
            mutationsTypes.commentCreateFailure,
            result.response.data.errors
          )
        })
    })
  },

  [actionTypes.commentDelete](context, {slug, id}) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.commentDeleteStart)

      commentFormApi
        .deleteComment(slug, id)
        .then((data) => {
          context.commit(mutationsTypes.commentDeleteSuccess, data)
          resolve(data)
        })
        .catch(() => context.commit(mutationsTypes.commentDeleteFailure))
    })
  },
}

export default {
  state,
  actions,
  mutations,
}
