import axios from 'axios'

/**
 * @param {String} slug имя поста
 */

const getComment = ({slug}) => {
  return axios
    .get(`/articles/${slug}/comments`)
    .then((response) => response.data)
}

/**
 *
 * @param {String} slug имя поста
 * @param {String} body тело формы поста
 */

const addComment = ({slug}, body) => {
  return axios
    .post(`/articles/${slug}/comments`, {
      comment: {
        body: body,
      },
    })
    .then((response) => response.data)
}

/**
 *
 * @param {Number} id ID автора
 * @param {String} slug имя поста
 */

const deleteComment = (slug, id) => {
  return axios
    .delete(`/articles/${slug}/comments/${id}`)
    .then((response) => response.data)
}

export default {
  addComment,
  deleteComment,
  getComment,
}
