import followUserApi from '@/api/followToUser'

const state = {
  profile: null,
  isFollowed: false,
}

const mutationTypes = {
  followToUserStart: '[followToUser] Follow to user start',
  followToUserSuccess: '[followToUser] Follow to user success',
  followToUserFailure: '[followToUser] Follow to user failure',

  unFollowFromUserStart: '[followToUser] Unfollow from user start',
  unFollowFromUserSuccess: '[followToUser] Unfollow from user success',
  unFollowFromUserFailure: '[followToUser] Unfollow from user failure',
}

export const actionTypes = {
  followToUser: '[followToUser] Follow to user',
  unFollowFromUser: '[followToUser] Unfollow from user',
}

const mutations = {
  [mutationTypes.followToUserStart]() {},
  [mutationTypes.followToUserSuccess](state, payload) {
    state.profile = payload
    state.isFollowed = true
  },
  [mutationTypes.followToUserFailure]() {},

  [mutationTypes.unFollowFromUserStart]() {},
  [mutationTypes.unFollowFromUserSuccess](state) {
    state.profile = null
    state.isFollowed = false
  },
  [mutationTypes.unFollowFromUserFailure]() {},
}

const actions = {
  [actionTypes.followToUser](context, {slug}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.followToUserStart)

      followUserApi
        .followToUser(slug)
        .then((user) => {
          context.commit(mutationTypes.followToUserSuccess, user)
          resolve(user)
        })
        .catch(() => {
          context.commit(mutationTypes.followToUserFailure)
        })
    })
  },

  [actionTypes.unFollowFromUser](context, {slug}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.unFollowFromUserStart)

      followUserApi
        .unfollowFromUser(slug)
        .then((user) => {
          context.commit(mutationTypes.unFollowFromUserSuccess, user)
          resolve(user)
        })
        .catch(() => {
          context.commit(mutationTypes.unFollowFromUserFailure)
        })
    })
  },
}

export default {
  state,
  actions,
  mutations,
}
