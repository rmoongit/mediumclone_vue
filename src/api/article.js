import axios from 'axios'

/**
 * @param {String} slug ссылка на слаг пользователя
 */

const getArticle = (slug) => {
  return axios
    .get(`/articles/${slug}`)
    .then((response) => response.data.article)
}

const deleteArticle = (slug) => {
  return axios.delete(`/articles/${slug}`)
}

const createArticle = (articleInput) => {
  return axios
    .post('/articles', {article: articleInput})
    .then((response) => response.data.article)
}

/**
 *
 * @param {String} slug ссылка на слаг пользователя
 * @param {String} articleInput передаём входные данные
 * @returns
 */

const updateArticle = (slug, articleInput) => {
  return axios
    .put(`/articles/${slug}`, {article: articleInput})
    .then((response) => response.data.article)
}

export default {
  getArticle,
  deleteArticle,
  createArticle,
  updateArticle,
}
