import followUserApi from '@/api/followToUser'

const mutationTypes = {
  followToUserSuccess: '[followToUser] Follow to user success',
  followToUserFailure: '[followToUser] Follow to user failure',

  unFollowFromUserSuccess: '[followToUser] Unfollow from user success',
  unFollowFromUserFailure: '[followToUser] Unfollow from user failure',
}

export const actionTypes = {
  followToUser: '[followToUser] Follow to user',
  unFollowFromUser: '[followToUser] Unfollow from user',
}

const mutations = {
  [mutationTypes.followToUserSuccess]() {},
  [mutationTypes.followToUserFailure]() {},

  [mutationTypes.unFollowFromUserSuccess]() {},
  [mutationTypes.unFollowFromUserFailure]() {},
}

const actions = {
  [actionTypes.followToUser](context, {slug}) {
    return new Promise((resolve) => {
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
  actions,
  mutations,
}
