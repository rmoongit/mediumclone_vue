import axios from '@/api/axios'

const register = (credentials) => {
  return axios.post('/users', {user: credentials})
}

const login = (credentials) => {
  return axios.post('/users/login', {user: credentials})
}

const getCurrentUser = () => {
  return axios.get('/user')
}

/**
 *
 * @param {Object} currentUserInput данные которые передадим с формы во vuex
 */

const updateCurrentUser = (currentUserInput) => {
  return axios
    .put('/user', {user: currentUserInput})
    .then((response) => response.data.user)
}

export default {
  register,
  login,
  getCurrentUser,
  updateCurrentUser,
}
