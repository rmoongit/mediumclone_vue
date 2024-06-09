import axios from '@/api/axios'

/**
 *
 * @param {String} username передаваемое имя по которому будет запрос.
 */

const followToUser = (username) => {
  return axios
    .post(`/profiles/${username}/follow`)
    .then((response) => response.data.profile)
}

const unfollowFromUser = (username) => {
  return axios
    .delete(`/profiles/${username}/follow`)
    .then((response) => response.data.profile)
}

export default {
  followToUser,
  unfollowFromUser,
}
