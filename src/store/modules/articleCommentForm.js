import commentFormApi from '@/api/articleCommentForm'

const mutationsTypes = {
  commentCreateStart: '[ArticleComment] Comment create start',
  commentCreateSuccess: '[ArticleComment] Comment create success',
  commentCreateFailure: '[ArticleComment] Comment create failure',
}

export const actionTypes = {
  commentCreate: '[ArticleComment] Comment create',
}

const mutations = {
  [mutationsTypes.commentCreateStart]() {},
  [mutationsTypes.commentCreateSuccess]() {},
  [mutationsTypes.commentCreateFailure]() {},
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
        .catch(() => {
          context.commit(mutationsTypes.commentCreateFailure)
        })
    })
  },
}

export default {
  actions,
  mutations,
}
