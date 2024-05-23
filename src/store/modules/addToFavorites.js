import favoriteApi from '@/api/addToFavorites'

const mutationTypes = {
  addToFavoriteStart: '[addToFavorites] Add to favorites start',
  addToFavoriteSuccess: '[addToFavorites] Add to favorite success',
  addToFavoriteFailure: '[addToFavorites] Add to favorite failure',
}

export const actionTypes = {
  addToFavorite: '[addToFavorites] Add to favorite',
}

const mutations = {
  [mutationTypes.addToFavoriteStart]() {},
  [mutationTypes.addToFavoriteSuccess]() {},
  [mutationTypes.addToFavoriteFailure]() {},
}

const actions = {
  [actionTypes.addToFavorite](context, {slug, isFavorited}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.addToFavoriteStart)

      const promise = isFavorited
        ? favoriteApi.removeFromFavorites(slug)
        : favoriteApi.addToFavorites(slug)

      promise
        .then((article) => {
          context.commit(mutationTypes.addToFavoriteSuccess, article)
          resolve(article)
        })
        .catch(() => {
          context.commit(mutationTypes.addToFavoriteFailure)
        })
    })
  },
}

export default {
  actions,
  mutations,
}
